#plug SconeHomeElixir.RedirectsPlug, %{"/" => "/page"}

#Plug.Adapters.Cowboy.http SconeHomeElixir.RedirectsPlug, []
