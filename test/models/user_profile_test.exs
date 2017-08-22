defmodule Sconely.UserProfileTest do
  alias Sconely.UserProfile
  use ExUnit.Case

  test "user profile first name cant be empty" do
    
    user_profile_changeset = UserProfile.changeset(%UserProfile{}, %{first_name: "", last_name: "Edwards", about_me: "about me", email: "rossedwards.us@gmail.com", mobile: "310-775-5566"})

    #assert [] == Registration.registration

    refute user_profile_changeset.valid?

    #IO.inspect(registration_changeset.errors)

    #refute registration_changeset.valid?

    #assert changeset.errors[:password_confirmation] == "does not match password!"


    #TodoItems.add("Make example app")
    #TodoItems.add("Write blog post")

    #assert [{"Make example app", false}, {"Write blog post", false}] == TodoItems.items

  end

  test "user profile last name cant be empty" do
    
    user_profile_changeset = UserProfile.changeset(%UserProfile{}, %{first_name: "Ross", last_name: "", about_me: "about me", email: "rossedwards.us@gmail.com", mobile: "310-775-5566"})

    #assert [] == Registration.registration

    refute user_profile_changeset.valid?

    #IO.inspect(registration_changeset.errors)

    #refute registration_changeset.valid?

    #assert changeset.errors[:password_confirmation] == "does not match password!"


    #TodoItems.add("Make example app")
    #TodoItems.add("Write blog post")

    #assert [{"Make example app", false}, {"Write blog post", false}] == TodoItems.items

  end
end