function SendReactMessage(action, data)
  SendNUIMessage({
    action = action,
    data = data
  })
end

local function setVisibility(visible)
  SetNuiFocus(visible, visible)
  SendReactMessage("setVisible", visible)
end

RegisterCommand("react", function()
  setVisibility(true);
end)

RegisterNUICallback("hide", function(_, cb)
  setVisibility(false)
  cb({})
end)
