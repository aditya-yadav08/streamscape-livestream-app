import { 
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider 
} from "./ui/tooltip";

interface HintProps {
    label: String;
    children: React.ReactNode;
    ascChild?: boolean;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
}

export const Hint = ({
    label,
    children,
    ascChild,
    side,
    align,
}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild={ascChild}>
                    {children}
                </TooltipTrigger>
                <TooltipContent 
                    className="text-black bg-white" 
                    side={side}
                    align={align}
                >
                    <p className="font-semibold">
                      {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}