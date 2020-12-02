import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const SignUp=()=>{


    return(
        <div>
        <form>
        <div class="form-row">
        <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail4"></input>
        </div>
        <div class="form-group col-md-6">
        <label for="inputPassword4">Password</label>
        <input type="password" class="form-control" id="inputPassword4"></input>
        </div>
        </div>
        <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
        </div>
        <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity"></input>
        </div>
        <div class="form-group col-md-4">
        <label for="inputState">State</label>
        <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
        </select>
        </div>
        <div class="form-group col-md-2">
        <label for="inputZip">Zip</label>
        <input type="text" class="form-control" id="inputZip"></input>
        </div>
        </div>
        <div class="form-group">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck"></input>
        <label class="form-check-label" for="gridCheck">
        Check me out
        </label>
        </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
        </div>
        )
};
export default SignUp;

