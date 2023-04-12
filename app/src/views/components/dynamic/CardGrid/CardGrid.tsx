import type { CardGridProps } from "@typings/CardGrid"
import type { JSXView } from "@typings/views"

import RightArrow from "@components/dynamic/RightArrow"

export const defaultProps: CardGridProps = {
    title: 'TITLE_NOT_FOUND',
    action: {
        payload: () => { },
        name: 'ACTION_NOT_FOUND'
    },
    cards: [
        {

        }
    ]
}

export default function CardGrid(props: CardGridProps): JSXView<CardGridProps> {
    return (
        <section className="py-4 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center justify-between mb-10 -m-2">
                    <div className="w-auto p-2">
                        <h2 className="font-heading text-3xl font-semibold">
                            {props?.title ?? defaultProps.title}
                        </h2>
                    </div>
                    <div className="w-auto p-2">
                        <a
                            className="flex flex-wrap items-center hover:text-neutral-500"
                            href={props?.action?.url ?? defaultProps.action.url}
                        >
                            <span className="mr-2.5">{props?.action?.name ?? defaultProps.action.name}</span>
                            <RightArrow />
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap -m-3">
                    {
                        props?.cards?.map((card, index) => {
                            return (
                                <div key={index} className="w-full sm:w-1/3 p-3">
                                    <a
                                        className="inline-block h-full bg-white border overflow-hidden rounded-xl"
                                        href={card?.url ?? '#'}
                                    >
                                        <img
                                            className="w-full"
                                            src={card.image?.src}
                                            alt=""
                                        />
                                        <div className="p-6">
                                            <p className="mb-8 text-xl font-medium">
                                                {card?.description}
                                            </p>
                                            <div className="flex flex-wrap items-center justify-between -m-2">
                                                <div className="w-auto p-2">
                                                    <p className="text-neutral-500">{card?.title ?? "TITLE_NOT_FOUND"}</p>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <img loading="lazy" src={card?.icon?.src} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        }) ??
                        defaultProps.cards.map((card, index) => {
                            return (
                                <div className="w-full sm:w-1/3 p-3">
                                    <a
                                        className="inline-block h-full bg-white border overflow-hidden rounded-xl"
                                        href="#"
                                    >
                                        <img
                                            className="w-full"
                                            src="dashy-assets/images/card-media3.png"
                                            alt=""
                                        />
                                        <div className="p-6">
                                            <p className="mb-8 text-xl font-medium">
                                                Management tool that tracks, gathers, and displays business data
                                            </p>
                                            <div className="flex flex-wrap items-center justify-between -m-2">
                                                <div className="w-auto p-2">
                                                    <p className="text-neutral-500">Cameron Williamson</p>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <img src="dashy-assets/images/card-avatar.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>

    )
}