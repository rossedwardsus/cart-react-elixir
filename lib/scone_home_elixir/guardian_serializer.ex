defmodule SconeHomeElixir.GuardianSerializer do
  @behaviour Guardian.Serializer
 
  alias MyApp.Repo
  #alias MyApp.User
 
  def for_token(user = %{user: "ross"}), do: { :ok, IO.puts("for_token#{user.user}") }
  def for_token(_), do: { :error, IO.puts("Unknown resource type") }
 
  def from_token("User:"), do: { :ok, IO.puts("from_token") }
  def from_token(_), do: { :error, "Unknown resource type from token" }
end
