import React, {FC} from "react";

type Props = {
    textColor:string,
    children?: React.ReactNode
}

const Button: FC<Props> =(_props: any) => {
    return(<button style={{color: _props.textColor}} >{_props.children}</button>)
 }

export default Button