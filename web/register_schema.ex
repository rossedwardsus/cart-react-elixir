defmodule Sconely.RegisterSchema do
  use Absinthe.Schema
  import_types Sconely.Schema.Types
 

  mutation do


  	field :register, type: :registration do
    	#arg :email, (:string)
    	#arg :mobile, (:string)
    		
    	resolve &Sconely.RegistrationResolver.create_user/2
  	end


  	#field :create_user, type: :registration do
    #	arg :host_id, (:string)
    	#arg :email
       	#arg :mobile
       	#arg :password
    	#arg :new_payment
    	#arg :cart
    		
    #	resolve &Sconely.OrderResolver.create/2
  	#end

  end
end