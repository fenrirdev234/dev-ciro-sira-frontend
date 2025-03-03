import { UseApiCall } from "@/models/useApi.model";
import { useCallback, useEffect, useState } from "react";

type UseApiOptions<P> = {
	params: P;
};

type Data<T> = T | null;
type CustomError = Error | null;

interface UseApiResult<T> {
	loading: boolean;
	data: Data<T>;
	error: CustomError;
}

export const useFetch = <T, P>(
	apiCall: (param: P) => UseApiCall<T>,

	params: P,
): UseApiResult<T> => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<Data<T>>(null);
	const [error, setError] = useState<CustomError>(null);
	const { call, controller } = apiCall(params);

	useEffect(() => {
		const fetchData = () => {
			call
				.then((response) => {
					setData(response.data);
					setError(null);
				})
				.catch((err) => {
					setError(err);
				})
				.finally(() => {
					setLoading(false);
				});
		};
		fetchData();

		return () => controller.abort();
	}, [JSON.stringify(params)]);

	return { data, loading, error };
};
