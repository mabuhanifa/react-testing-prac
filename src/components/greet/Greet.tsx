import { GreetTypes } from "./greet.types";

export default function Greet({ name }: GreetTypes) {
    return (
        <div>
            Hello {name}
        </div>
    )
}
