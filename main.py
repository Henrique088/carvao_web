from flask import Flask, render_template
from datetime import datetime
from mock_dados import *
from banco import db
from models import ProducaoDiaria


app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/carvoaria'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://flaskuser:senha_segura@172.30.0.1:3380/carvoaria'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)



def dia_semana_em_portugues(data):
    dias = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom']
    # O método weekday() retorna 0 (segunda) a 6 (domingo)
    return dias[data.weekday()]

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/cadastro')
def cadastro():
    print("Rota /cadastro foi acessada")
    return render_template('cadastro.html')


@app.route('/dashboard')
def dashboard():
    print("Rota /dashboard foi acessada")
    return render_template('dashboard.html')

@app.route('/fornos')
def forno():
    print("Rota /fornos foi acessada")
    return render_template('fornos.html')

@app.route('/producao')
def producao():
    print("Rota /producao foi acessada")
    return render_template('producao.html')

@app.route('/relatorios')
def relatorios():
    print("Rota /relatorios foi acessada")
    return render_template('relatorios.html')

@app.route('/insumos')
def insumos():
    print("Rota /insumos foi acessada")
    return render_template('insumos.html')

@app.route('/operadores')
def operadores():
    print("Rota /operadores foi acessada")
    return render_template('operadores.html')


@app.route('/lista')
def lista():
    print("Rota /lista foi acessada")
    registros = ProducaoDiaria.query.order_by(ProducaoDiaria.id).all()
    return render_template('lista_producao.html', registros=registros)

@app.route('/gerar_relatorio')
def relatorio():
    dias_semana = []
    dias_mes = 0
    print(fornos)
    for dia in range(1, 32):
        try:
            data = datetime(2023, 9, dia)
            dias_semana.append(dia_semana_em_portugues(data))  # 'dom', 'seg', ...
            dias_mes += 1
        except ValueError:
            break
    print("Rota /relatorio foi acessada")
    return render_template("relatorio_colorido.html", fornos = fornos, dias_semana=dias_semana, dias_mes=dias_mes, producao_pl=producao_pl,producao_re=producao_re,producao_1=producao_1, producao_2=producao_2, lenha_1=lenha_1, lenha_2=lenha_2, planejado_l=planejado_l, planejado_c=planejado_c, planejado_r=planejado_r, planejado_d=planejado_d, planejado_v=planejado_v, planejado_m=planejado_m, planejado=planejado, realizado= realizado, realizado_l=realizado_l, realizado_c=realizado_c, realizado_r=realizado_r, realizado_d=realizado_d, realizado_v=realizado_v, realizado_m=realizado_m)

if __name__ == '__main__':
    app.run(debug=True)
