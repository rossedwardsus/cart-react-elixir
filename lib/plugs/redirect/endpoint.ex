#plug SconeHomeElixir.RedirectsPlug, %{"/" => "/page"}

#Plug.Adapters.Cowboy.http SconeHomeElixir.RedirectsPlug, []


defmodule SconeHomeElixir.Plugs.Redirect.RedirectEndpoint do

		use Phoenix.Endpoint, otp_app: :scone_home_elixir

		#plug Plug.Session,
		 #   store: :cookie,
		 #   key: "_hello_phoenix_key",
		 #   signing_salt: "Jk7pxAMf"

		#def init(options), do: options

		 # def call(conn, _) do
		    #to = options[full_path(conn)]
		    #to = "/page"
		    #IO.puts("redirect plug")
		    #do_redirect(conn, to)
		  #  conn |> do_redirect(conn)
		  #end

		#defp do_redirect(conn, _) do

		#	Phoenix.Controller.redirect conn, to: "/user1"

		#end

		plug SconeHomeElixir.Plugs.Redirect.RedirectsPlug
 
end

