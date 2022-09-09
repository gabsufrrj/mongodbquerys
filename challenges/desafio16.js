db.produtos.updateOne({
  nome: "Big Mac",
}, {
  $currentDate: { ultimaModificação: { $type: "timestamp" } },
});

db.produtos.find({
  ultimaModificação: { $exists: true },
}, { nome: true, _id: false });