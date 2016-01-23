defmodule DodoServer.PageController do
  use DodoServer.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
