import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postFeedback } from "../../Redux/actions";

export default function CreateFeedback(props) {
  const dispatch = useDispatch();
  console.log(props);
  var idUser = props.match.params.id;
  console.log("Este es el user id:", idUser);
  const [input, setInput] = useState({
    Text: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postFeedback([idUser, input]));
    alert("Feedback creado");
  }

  return (
    <>
      <form onSubmit={e=> handleSubmit(e)}>
            <div>
                <h1>Crear Feedback</h1>
            </div>
            <div>
                <label>Feedback: </label>
                <input
                type= 'text'
                value= {input.Text}
                name='Text'
                onChange={(e) => handleChange(e)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered ">
          <div class="modal-content bg-dark ">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">
                Dejar un feedback
              </h4>
              {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-4">
                    <h5>Tu feedback: </h5>
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      value={input.Text}
                      name="Text"
                      style={{ width: "100%" }}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={(e) => handleSubmit(e)}
              >
                Enviar Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
