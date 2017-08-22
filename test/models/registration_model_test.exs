defmodule Sconely.RegistrationTest do
  alias Sconely.Registration
  use ExUnit.Case

  setup do

      #setup do
      #  {:ok, conn: Phoenix.ConnTest.conn()}
      #end

  		#on_exit = IO.inpect("exit")

  		{:ok, %{}}

      #user = create_user(%{name: "john"})
      #session = create_session(user)

      #conn = conn
      #|> put_req_header("accept", "application/json")
      #|> put_req_header("authorization", "Bearer " <> session.token)
      #{:ok, conn: conn}

  end

  #test login
  #test registration
  #test token
  #test comeonin

  #def create(changeset, repo) do
  #  changeset
  #  |> put_change(:crypted_password, hashed_password(changeset.params["password"]))
  #  |> repo.insert()
  #end

  #defp hashed_password(password) do
    # hash password
  #end



  test "registration - email cat be blank" do
  	registration_changeset = Registration.changeset(%Registration{}, %{email: "", password_hash: ""})

    #assert [] == Registration.registration

    #assert registration_changeset.valid?

    IO.inspect(registration_changeset.errors)

    refute registration_changeset.valid?

    #assert changeset.errors[:password_confirmation] == "does not match password!"


    #TodoItems.add("Make example app")
    #TodoItems.add("Write blog post")

    #assert [{"Make example app", false}, {"Write blog post", false}] == TodoItems.items
  end




  test "registration email exists - index validation constraint" do
  	changeset = Registration.changeset(%Registration{}, %{email: "rossedwards", password: ""})

    #assert [] == Registration.registration

    #assert changeset.valid?

    #TodoItems.add("Make example app")
    #TodoItems.add("Write blog post")

    #assert [{"Make example app", false}, {"Write blog post", false}] == TodoItems.items
  end




  test "user profile first name cant be empty string" do
  	changeset = Registration.changeset(%Registration{}, %{email: "rossedwards", password: ""})

    #assert [] == Registration.registration

    #refute changeset.valid?

    #TodoItems.add("Make example app")
    #TodoItems.add("Write blog post")

    #assert [{"Make example app", false}, {"Write blog post", false}] == TodoItems.items
  end
end