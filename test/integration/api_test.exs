defmodule Sconely.ApiTest do
  use SconeHomeElixir.ConnCase, async: true
  #use Plug.Test
  alias SconeHomeElixir.Router

  @opts Router.init([])
  #test 'posting to login api with nothing' do
  #  conn = build_conn(:post, "/api/login")
    #response = Router.call(conn, @opts)
    #IO.inspect(response)
    #assert response.status == 200
  #end

  test 'public menu' do
    #axios.post('/api/graphql',
    # {query: 'query {get_menu_items {id name description ingredients}}'}
    
    #IO.puts("\n")
     
    conn = build_conn(:get, "/api/menu_items")

    IO.puts("\n" <> conn)

    #conn = build_conn(:get, "/api/login")
    response = Router.call(conn, @opts)
    #IO.inspect(response)
    
    assert response.status == 200
  end

end
