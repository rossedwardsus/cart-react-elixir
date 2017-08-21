defmodule Sconely.LoginTest do
  alias Sconely.Registration
  use ExUnit.Case

  setup do

  		#on_exit = IO.inpect("exit")

  		{:ok, %{}}

  end

  test "registration bad email input" do
  	changeset = Registration.changeset(%Registration{}, %{first_name: "", last_name: "", email: "", password: "", password_salt: ""})

    #assert [] == Registration.registration

    #assert changeset.valid?

    #TodoItems.add("Make example app")
    #TodoItems.add("Write blog post")

    #assert [{"Make example app", false}, {"Write blog post", false}] == TodoItems.items
  end



  test "registration bad password camt be empty string" do
  	changeset = Registration.changeset(%Registration{}, %{email: "rossedwards", password: ""})

    #assert [] == Registration.registration

    #assert changeset.valid?

    #TodoItems.add("Make example app")
    #TodoItems.add("Write blog post")

    #assert [{"Make example app", false}, {"Write blog post", false}] == TodoItems.items
  end


end