export type ImageProps = {
    src?: string,
    alt?: string,
    
}
export type CardProps = {
    title?: string,
    url?: string,
    description?: string,
    icon?: ImageProps,
    image?: ImageProps
}

export type CardGridProps = {
    title?: string,
    action?: {
        payload?: () => any,
        name?: string,
        url?: string,
    },
    cards?: CardProps[],
}