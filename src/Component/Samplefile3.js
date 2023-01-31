// import React from 'react'

// const Samplefile3 = ({name,occupation}) => {
//   return (
//     <div>
//         <h1>Hello {name} a k a {occupation}</h1>    //  Destructuring Props 
//     </div>
//   )
// }

// export default Samplefile3



// import React from 'react'

// const Samplefile3 = (props) => {
//   return (
//     <div>
//         <h1>Hello {props.name} a k a {props.occupation}</h1>  
//     </div>
//   )
// }

// export default Samplefile3


// import React from 'react'

// const Samplefile3 = (props) => {
//     const {name,occupation} = props
//   return (
//     <div>
//         <h1>Hello {name} a k a {occupation}</h1>
//     </div>
//   )
// }

// export default Samplefile3


import React, { Component } from 'react'

class Samplefile3 extends Component {
    render() {
        const { name, occupation } = this.props
        // const { state1, state2 } = this.state;
        return (
            <div>
                <h1>Hello {name} a k a {occupation}</h1>
            </div>
        )
    }
}

export default Samplefile3