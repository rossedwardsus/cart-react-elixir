defmodule Sconely.GuardianSerializer do
  @behaviour Guardian.Serializer
 
  alias MyApp.Repo
  #alias MyApp.User
 
  def for_token(user = %{user_id: user_id}), do: { :ok, "User:#{user.user_id}" }
  #def for_token(_), do: { :ok, "ok" }
  def for_token(_), do: { :error, IO.puts("Unknown resource type for jwt token") }
 
  def from_token("User:" <> id), do: { :ok, %{id: id} }
  def from_token(_), do: { :error, "Unknown resource type from token" }
end
