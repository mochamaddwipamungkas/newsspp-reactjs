import React from "react";

export default class Conditional extends React.Component {
    state = {
        isLoading: true
    }
    render() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000);

        return (
            <div>
                {
                    this.state.isLoading
                        ? <h1>Loading......</h1>
                        : <h1>Selamat datang dikelas MERN</h1>
                }
            </div>
        )
        // const isLogin = false;

        // return (
        //     <div>
        //         {isLogin ? <h1>Anda suda Login</h1> : <h1>Silahkan login terlebih dahulu</h1>} {/*ternary operator*/}
        //     </div>
        // )

        /* let message = "";
 
         if (isLogin) {
             message = "Anda sudah loginnn"
         } else {
             message = "Silahkan login terlebih dahulu"
         }
 
         return (
             <div>
                 <h1>{message}</h1>
             </div>
         ) */

        // if (isLogin) {
        //     return (
        //         <div>
        //             <h1>Anda suda Login</h1>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h1>Silahkan login terlebih dahulu</h1>
        //         </div>
        //     )
        // }


    }
}