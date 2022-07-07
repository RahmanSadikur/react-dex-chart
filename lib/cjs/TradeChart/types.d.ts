export interface MarketInfo {
    alias: string | undefined | null;
    pricePrecisionDecimal: number;
    image?: string | undefined | null;
    baseAsset: {
        symbol: string;
    };
    quoteAsset: {
        symbol: string;
    };
}
export interface UserOrder {
    price: string;
    size: string;
    market: string;
    side: string;
    status: string;
}
export interface UserFill {
    id: number;
    price: number;
    side: string;
    time: Date;
}
export interface TimeInterval {
    id: number;
    value: string | undefined | null;
    string: string;
}
export interface ChartSettings {
    trade: ChartTrading;
    timezone: ChartTimezone;
    background: ChartBackground;
}
export interface ChartTrading {
    showOrders: boolean;
    showExecutions: boolean;
    showPositions: boolean;
    extendLines: boolean;
    playSound: boolean;
}
export interface ChartColor {
    r: number;
    g: number;
    b: number;
    a: number;
}
export interface ChartBackground {
    gradient: boolean;
    color: ChartColor | null | undefined;
}
export interface ChartTimezone {
    locale: string;
    showSessions: boolean;
}
