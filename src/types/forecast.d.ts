export interface ForecastAPIResponse {
    list: {
        dt_txt: string;
        main: {
            temp: number;
        };
        weather: {
            main: string;
            icon: string;
        }[];
    }[];
    city: {
        name: string;
    };
}
