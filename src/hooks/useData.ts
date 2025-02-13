import apiClient from '@/services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface fetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(
        () => {
            const controller = new AbortController();
            setLoading(true);
            apiClient
                .get<fetchResponse<T>>(endPoint, { signal: controller.signal, ...requestConfig })
                .then((res) => {
                    setData(res.data.results);
                    setLoading(false);
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                    setLoading(false);
                });
            return () => controller.abort();
        },
        dependencies ? [...dependencies] : []
    );

    return { data, error, isLoading };
};

export default useData;
