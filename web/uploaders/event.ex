defmodule Sconely.Event do
  use Arc.Definition

  # Include ecto support (requires package arc_ecto installed):
  # use Arc.Ecto.Definition

  @versions [:original, :thumb]

  #store(%Plug.Upload{filename: "photo_image", path: "/"})

  # To add a thumbnail version:
  # @versions [:original, :thumb]

  # Whitelist file extensions:
  def validate({file, _}) do
    ~w(.jpg .jpeg .gif .png) |> Enum.member?(Path.extname(file.file_name))
  end

  # Define a thumbnail transformation:
  def transform(:thumb, _) do
     {:convert, "-strip -thumbnail 250x250^ -gravity center -extent 250x250 -format png", :png}
  end

  # Override the persisted filenames:
  def filename(version, _) do
    version
  end

  def __storage, do: Arc.Storage.Local

  # Override the storage directory:
  def storage_dir(version, {file, scope}) do
     #"uploads/user/avatars/#{scope.id}"
     "uploads/"
  end

  # Provide a default URL if there hasn't been a file uploaded
  # def default_url(version, scope) do
  #   "/images/avatars/default_#{version}.png"
  # end

  # Specify custom headers for s3 objects
  # Available options are [:cache_control, :content_disposition,
  #    :content_encoding, :content_length, :content_type,
  #    :expect, :expires, :storage_class, :website_redirect_location]
  #
  # def s3_object_headers(version, {file, scope}) do
  #   [content_type: Plug.MIME.path(file.file_name)]
  # end
end

current_user = %{id: 1}

#SconeHomeElixir.Userprofile.store({"test.jpg", %{id: 1}})

#SconeHomeElixir.Userprofile.store({%Plug.Upload{}, current_user})

#%Plug.Upload{content_type: "image/jpeg", filename: "chocolate_chip_scones.jpg", path: "/var/folders/m8/gsh8v6596tx6ql90q_wtz_mh0000gn/T//plug-1468/multipart-947828-788239-5"}}
