import React from 'react'
import { createItem } from '../../api'

import { toast } from 'react-toastify';

const AddProduct = (props) => {

    const initialState = props.initialState || {
        name: "",
        price: "",
        description: "",
        image: "",
    }

    const [state, setState] = React.useState(initialState)

    const changeState = (key) => (event) => {
    
        const newState = {...state, [key]: event.target.value}
        console.log({newState})
        setState(newState)

    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log("submitting", {state})

        const item = await createItem(state)
        toast.success("submitted " + item.name)
        
    }

    return (
        <div class="container">
        <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
                <form class="form-horizontal" onSubmit={onSubmit}>
                    <fieldset>
                        <legend class="text-center header">Add new product</legend>

                        <div class="form-group">
             
                            <div class="col-md-8">
                                <input onChange={changeState('name')} value={state.name} id="fname" name="name" type="text" placeholder="Product Name" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-8">
                                <input onChange={changeState('price')} value={state.price} id="lname" name="name" type="text" placeholder="Product Price" class="form-control" />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8">
                                <textarea onChange={changeState('description')} value={state.description} class="form-control" id="message" name="message" placeholder="Description" rows="7"></textarea>
                            </div>
                        </div>


                        <div class="form-group">
                            <div class="col-md-8">
                                <input onChange={changeState('image')} value={state.image} type="file" placeholder="Phone" class="form-control" />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
   )
}

export default AddProduct