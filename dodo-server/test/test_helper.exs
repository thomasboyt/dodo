ExUnit.start

Mix.Task.run "ecto.create", ~w(-r DodoServer.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r DodoServer.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(DodoServer.Repo)

