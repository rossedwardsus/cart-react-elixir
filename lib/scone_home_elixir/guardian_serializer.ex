defmodule SconeHomeElixir.GuardianSerializer do
  @behaviour Guardian.Serializer
 
  alias MyApp.Repo
  #alias MyApp.User
 
  def for_token("user"), do: { :ok, "User:user.id" }
  def for_token("user1"), do: { :error, "Unknown resource typ" }
 
  def from_token("User:" <> id), do: { :ok, Repo.get(User, id) }
  def from_token(_), do: { :error, "Unknown resource type" }
end
