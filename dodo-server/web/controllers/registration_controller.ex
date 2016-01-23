defmodule DodoServer.RegistrationController do
  use DodoServer.Web, :controller
  alias DodoServer.User

  import Ecto.Changeset, only: [put_change: 3]

  def create(conn, user_params) do
    changeset = User.changeset(%User{}, user_params)

    # TODO:
    # This causes a 500 application error if no password is passed :(
    changeset = put_change(changeset, :encrypted_password, User.hashed_password(changeset.params["password"]))

    case Repo.insert(changeset) do
      {:ok, user} ->
        # sign in user
        {:ok, jwt, _full_claims} = Guardian.encode_and_sign(user, :token)
        conn
        |> put_status(:created)
        |> render(DodoServer.SessionView, "show.json", jwt: jwt, user: user)
      {:error, changeset} ->
        # return an error
        conn
        |> put_status(:unprocessable_entity)
        |> render(DodoServer.RegistrationView, "error.json", changeset: changeset)
    end
  end
end
