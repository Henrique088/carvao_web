from banco import db

class ProducaoDiaria(db.Model):
    __tablename__ = 'producaodiaria'

    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(2))
    vazio = db.Column(db.String(5))
    carregado = db.Column(db.String(5))
    carbonizando = db.Column(db.String(5))
    resfriando = db.Column(db.String(5))
    tirado = db.Column(db.String(5))
    manutencao = db.Column(db.String(5))
    ativo = db.Column(db.Numeric(15, 2), default=0.00)
    producao = db.Column(db.Numeric(15, 2), default=0.00)
    expedicao = db.Column(db.Numeric(15, 2), default=0.00)
    estoque = db.Column(db.Numeric(15, 2), default=0.00)
    consumo = db.Column(db.Numeric(15, 2), default=0.00)
    consumoacomulado = db.Column(db.Numeric(15, 2), default=0.00)
    descarga = db.Column(db.Numeric(15, 2), default=0.00)
    mst_mdc = db.Column(db.Numeric(15, 2), default=0.00)