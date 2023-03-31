<center><h1> Aula 2 Java Script</h1></center>

## Objetos

### Entendendo a criação de objetos
<br>
let: defini a criação de objeto

console.log: Mostra no console o que foi feito até o momneto

Operadores logicos: +, -, *, /, %, =, <, >, <=, >=, ==, !=.

## Hands-ON
###### Obs.: Quando o codigo dentro arquivo "index.html" ele é ineterno e quando estiver em outro arquivo ele é externo
### Replace

Utilizando .replace("provas","avaliações") no exemplo 
```
    let txt = "As provas estão chegando";
    console.log(txt.replace("provas","avaliações"));
```
é possivel trocar uma palavra trocar as palavras impressas no console

### toFixed e toPrecision

<br>


Exemplos
```
let num =  123.5256;
document.write(num.toFixed(2));
document.write(" <br/> <br/> ");

let num2 = 123.5256;
document.write(num2.toPrecision(4));
```
<br>
## If & Else
### Estrutura de decisão

O `if`, `elif` e `else` são comandos de controle de fluxo em Python. Eles permitem que você execute certas ações com base em condições.

## If

O `if` é usado para executar uma ação se uma condição for verdadeira. A sintaxe do `if` é a seguinte:

```
if condição:
    código a ser executado se a condição for verdadeira

```

Por exemplo, se quisermos imprimir "Olá, mundo!" apenas se uma variável `x` for maior que `10`, podemos usar o seguinte código:

```
x = 15

if x > 10:
    print("Olá, mundo!")

```

## Else

O `else` é usado para executar uma ação se a condição do `if` for falsa. A sintaxe do `else` é a seguinte:

```
if condição:
    código a ser executado se a condição for verdadeira
else:
    código a ser executado se a condição for falsa

```

Por exemplo, se quisermos imprimir "Olá, mundo!" se `x` for maior que `10`, mas imprimir "Tchau, mundo!" caso contrário, podemos usar o seguinte código:

```
x = 5

if x > 10:
    print("Olá, mundo!")
else:
    print("Tchau, mundo!")

```

## Elif

O `elif` é usado para testar várias condições. Ele deve ser usado depois do `if` e antes do `else`. A sintaxe do `elif` é a seguinte:

```
if condição1:
    código a ser executado se a condição1 for verdadeira
elif condição2:
    código a ser executado se a condição2 for verdadeira
else:
    código a ser executado se nenhuma das condições anteriores for verdadeira

```

Por exemplo, se quisermos imprimir "Olá, mundo!" se `x` for maior que `10`, imprimir "Oi, mundo!" se `x` for igual a `10`, e imprimir "Tchau, mundo!" caso contrário, podemos usar o seguinte código:

```
x = 5

if x > 10:
    print("Olá, mundo!")
elif x == 10:
    print("Oi, mundo!")
else:
    print("Tchau, mundo!")

```

## AND & OR

&& = and

|| = or
