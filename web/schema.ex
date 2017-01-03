defmodule SconeHomeElixir.Schema do
  use Absinthe.Schema
  import_types SconeHomeElixir.Schema.Types
 
  query do
    field :posts, list_of(:post) do
      resolve &SconeHomeElixir.PostResolver.all/2
    end
  end

  mutation do
  @desc "Create a post"
  field :post, type: :post do
    arg :title, non_null(:string)
    arg :body, non_null(:string)
    arg :posted_at, non_null(:string)

    resolve &SconeHomeElixir.PostResolver.create/2
  end
end
end