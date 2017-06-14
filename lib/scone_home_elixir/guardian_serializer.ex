defmodule Sconely.GuardianSerializer do
  @behaviour Guardian.Serializer
 
  alias MyApp.Repo
  #alias MyApp.User
 
  def for_token(user = %{id: 1}), do: { :ok, "User:#{user.id}" }
  def for_token(_), do: { :error, IO.puts("Unknown resource type for token") }
 
  def from_token("User:" <> id), do: { :ok, %{id: id} }
  def from_token(_), do: { :error, "Unknown resource type from token" }
end
