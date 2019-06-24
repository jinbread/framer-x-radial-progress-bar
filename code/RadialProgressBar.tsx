import * as React from "react"
import { Frame, useCycle, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"

export function RadialProgressBar(props) {
    const StyledCircle = styled.g`
        stroke-dasharray: ${(props.size - props.strokeWidth) * 4};
        stroke-dashoffset: ${(props.size - props.strokeWidth) * 4 -
            props.dashOffset};
        
        stroke-width: ${props.strokeWidth};
        stroke-linecap: ${props.lineCap};
        border-image: linear-gradient(to right, #01c9ca 0%, #3886FF 100%);
    }
    `

    return (
        <Frame size={props.size} center backgroundColor={"transparent"}>
            <Frame size={props.size} backgroundColor={"transparent"} center>
                <svg width={props.size} height={props.size}>
                    <defs>
                        <linearGradient
                            id="linear"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stop-color={props.endColor} />
                            <stop offset="100%" stop-color={props.startColor} />
                        </linearGradient>
                    </defs>
                    <StyledCircle fill="transparent" stroke="url(#linear)">
                        <rect
                            id="Rectangle"
                            x={props.strokeWidth / 2}
                            y={props.strokeWidth / 2}
                            width={props.size - props.strokeWidth}
                            height={props.size - props.strokeWidth}
                            rx={props.radius}
                        />
                    </StyledCircle>
                </svg>
            </Frame>
        </Frame>
    )
}

RadialProgressBar.defaultProps = {
    size: 200,
    radius: 100,
    strokeWidth: 30,
    dashOffset: 440,
    lineCap: "round",
    endColor: "#05a",
    startColor: "#0a5",
}

addPropertyControls(RadialProgressBar, {
    size: {
        type: ControlType.Number,
    },
    radius: {
        type: ControlType.Number,
    },
    strokeWidth: {
        type: ControlType.Number,
    },
    dashOffset: {
        type: ControlType.Number,
        min: 0,
        max: 1000,
    },
    lineCap: {
        type: ControlType.Enum,
        defaultValue: "round",
        options: ["round", "butt", "square"],
        optionTitles: ["Round", "Butt", "Square"],
    },
    startColor: {
        type: ControlType.Color,
    },
    endColor: {
        type: ControlType.Color,
    },
})
