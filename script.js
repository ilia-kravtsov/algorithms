// ================================ Алгоритм бинарного поиска O(log n)

// Бинарный поиск работает только с отсортированными массивами. 
// Без сортировки алгоритм не сможет гарантированно найти элемент.

// input - исходные данные
const nums_1 = [1, 4, 6, 7, 10, 11, 14, 15, 23, 42, 55];
const target = 6;

/* algorithm 

Сложность
Поскольку на каждом шаге количество элементов уменьшается в два раза,
количество итераций можно оценить как log₂(n), где n — количество элементов в массиве.
Таким образом, временная сложность бинарного поиска составляет O(log n)

Алгоритм продолжает работу, пока левая граница меньше либо равна правой (left <= right) - мы будем итерировать массив
То есть, что в массиве ещё остались непроверенные элементы.

В каждой итерации находится индекс среднего элемента: mid = Math.floor((left + right) / 2) - это деление массива на две части
Если элемент в середине массива nums_1[mid] равен целевому значению target, 
возвращается индекс среднего элемента, так как нужный элемент найден.

if (nums_1[mid] === target) { 
    return mid; если true возвращаем индекс mid

Если средний элемент меньше целевого значения nums_1[mid] < target, 
это значит, что искомый элемент находится правее, и левая граница смещается на mid + 1, а правая остается той же

Если средний элемент больше целевого значения, сдвигается правая граница на mid - 1, 
так как искомый элемент находится левее, а левая граница остается той же 

return 'не нашли :(' - если target нет в массиве
*/
function binarySearch(nums_1, target) {
  let left = 0;
  let right = nums_1.length - 1;

  while (left <= right) { 
      let mid = Math.floor((left + right) / 2); 
      if (nums_1[mid] === target) { 
          return mid;               
      } else if (nums_1[mid] < target) { 
          left = mid + 1; 
      } else {
          right = mid - 1; 
      }
  }

  return 'не нашли :('
}

// output - выходные данные
const result = binarySearch(nums_1, target);
console.log(result);

// ================================



// ================================ Сортировка пузырьком Bubble sort O(n²) version 1

// input - исходные данные
const nums_2 = [67, 34, 12, 22]

/* algorithm 

Сложность
Худший случай если массив будет отсортирован в обратном порядке 
каждый элемент будет перемещаться на своё место, и это потребует выполнения внутреннего цикла на каждом шаге
Таким образом, в худшем случае алгоритм будет выполнять примерно n * (n-1) сравнений 
(то есть ~ n² операций), где n — это длина массива

O(n²) — в худшем и среднем случае, если массив не отсортирован и нужно выполнять полный перебор всех элементов.
O(n) — в лучшем случае, если массив уже отсортирован, так как тогда выполняется только один проход по массиву.

Внешний цикл (j): для запуска такого количества итераций сколько будет неотсортированных элементов в массиве в худшем случае nums_2.length
Цикл for с переменной j контролирует количество проходов по массиву. 
Алгоритм делает столько проходов, сколько элементов в массиве nums_2.length, 
но может завершиться раньше, если массив уже отсортирован.
В каждой итерации устанавливается флаг isSorted в значение true. 
Этот флаг отслеживает, произошли ли какие-то изменения в текущем проходе. 
Если изменений нет, это означает, что массив уже отсортирован 

Внутренний цикл (i): для непосредственной перестановки пар элементов 
Внутри каждого прохода (итерации внешнего цикла j), 
происходит внутренний цикл for с переменной i, который перебирает элементы массива, начиная с нуля.
В этом цикле на каждом шаге происходит сравнение двух соседних элементов массива: 
текущего элемента nums_2[i] и следующего элемента nums_2[i + 1] 

Если значение текущего элемента больше следующего (nums_2[i] > nums_2[i + 1]), 
значит, эти элементы находятся в неправильном порядке
В этом случае необходимо поменять их местами, чтобы больший элемент оказался правее, 
что и происходит с помощью временной переменной temp. 

Процесс:
В temp сохраняется значение текущего элемента nums_2[i].
Текущее значение заменяется значением следующего элемента (nums_2[i + 1]).
Следующий элемент получает старое значение текущего элемента из temp

Флаг isSorted:

Если хоть один обмен произошел, флаг isSorted устанавливается в false, 
что указывает на то, что массив еще не отсортирован, и нужно продолжать следующие проходы.
Завершение досрочного выхода:
После завершения внутреннего цикла проверяется значение флага isSorted. 
Если оно осталось true, значит, за текущий проход не было ни одной замены позиции элементов, и массив уже отсортирован
В таком случае срабатывает команда break, 
которая прерывает выполнение внешнего цикла, чтобы избежать лишних проходов по массиву
*/

for (let j = 0; j < nums_2.length; j++) {
    let isSorted = true
    for (let i = 0; i < nums_2.length; i++) {
        if (nums_2[i] > nums_2[i+1]) { // если true то надо переставить
            isSorted = false
            let temp = nums_2[i]
            nums_2[i] = nums_2[i+1]
            nums_2[i+1] = temp
        }
    }
    if(isSorted) break
}

// output 
console.log(nums_2)

// ================================

// ================================ Сортировка пузырьком Bubble sort O(n²) version 2

const nums_3 = [67, 34, 12, 22]

for (let j = 0; j < nums_3.length; j++) {
    let isSorted = true
    for (let i = 0; i < nums_3.length; i++) {
        if (nums_3[i] > nums_3[i+1]) { // если true то надо переставить
            isSorted = false
            [nums_3[i+1], nums_3[i]] = [nums_3[i], nums_3[i+1]]
        }
    }
    if(isSorted) break
}
console.log(nums_3)

// ================================

// ================================ Быстрая сортировка Quick Sort O(n²) - в худшем, O(n log n) в среднем случае

// input - исходные данные
const nums_4 = [67, 34, 12, 22];

/* algorithm

Сложность
Для алгоритма быстрой сортировки (quick sort) временная сложность в худшем случае составляет O(n²). 
Это происходит, когда массив уже отсортирован или отсортирован в обратном порядке, 
и при каждом выборе опорного элемента он оказывается либо самым большим, либо самым маленьким элементом. 
В результате каждый раз алгоритм делит массив на подмассив, содержащий только один элемент, 
и на второй подмассив, содержащий остальные элементы.
Таким образом, происходит n рекурсивных вызовов, 
и на каждом уровне глубины необходимо выполнить n операций для разделения массива, 
что в итоге приводит к сложности O(n²)

Худший случай: O(n²)
Средний случай: O(n log n)

Выбор опорного элемента: Опорным элементом выбирается последний элемент массива.
Разделение: Массив делится на два подмассива: элементы меньше опорного и элементы больше или равные ему.
Рекурсия: Рекурсивно сортируем оба подмассива.
Объединение: Возвращаем объединенный массив, 
состоящий из отсортированного левого подмассива, опорного элемента и отсортированного правого подмассива.
*/

function quickSort(arr) {
  if (arr.length <= 1) {
      return arr; // базовый случай: массив из одного или нуля элементов уже отсортирован
  }

  const pivot = arr[arr.length - 1]; // выбираем последний элемент в качестве опорного
  const left = []; // элементы меньше опорного
  const right = []; // элементы больше опорного

  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]); // помещаем элементы меньше опорного в левый массив
      } else {
          right.push(arr[i]); // помещаем элементы больше или равные опорному в правый массив
      }
  }

  // рекурсивно сортируем левую и правую части и объединяем их с опорным элементом
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const sortedQuick = quickSort(nums_4);
console.log(sortedQuick);

// ================================

// ================================ Сортировка слиянием Merge Sort O(n log n)

// input - исходные данные
const nums_5 = [67, 34, 12, 22];

/* algorithm 

Сложность O(n log n) во всех случаях

Разделение: Массив делится на две половины до тех пор, пока каждая часть не станет размером 1 или меньше.
Слияние: Отсортированные подмассивы объединяются в один отсортированный массив.
Рекурсия: Процесс продолжается, пока все подмассивы не будут объединены.
*/

function mergeSort(arr) {
  if (arr.length <= 1) {
      return arr; // базовый случай: массив из одного или нуля элементов уже отсортирован
  }

  const mid = Math.floor(arr.length / 2); // находим индекс среднего элемента в массиве
  const left = mergeSort(arr.slice(0, mid)); // рекурсивно сортируем левую часть
  const right = mergeSort(arr.slice(mid)); // рекурсивно сортируем правую часть

  return merge(left, right); // слияние отсортированных частей
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // объединяем два массива в один отсортированный
  while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
      } else {
          result.push(right[j]);
          j++;
      }
  }

  // добавляем оставшиеся элементы
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// output
const sortedMerge = mergeSort(nums_5);
console.log(sortedMerge);

// ================================

// ================================  Факториал O(n)

/* input
Факториал определен только для неотрицательных целых чисел, 
потому что он представляет собой произведение всех положительных целых чисел от 1 до N. 
Для отрицательных чисел не существует конечного числа, которое можно было бы умножать в подобной последовательности.

число N (N < 1000)
Требуется вычислить факториал целого числа N. 

Факториал обозначают как N! и вычисляют по формуле:

N! = 1 * 2 * 3 * … * (N-1) * N, причем 0! = 1.

Так же допустимо рекуррентное соотношение: N! = (N-1)! * N */
const number_1 = 10;

/* algorithm

Рекурсивный вариант 

Сложность O(n)

Если 𝑛 равно 0 или 1, возвращается 1.
В противном случае функция вызывает саму себя с 𝑛 − 1 и умножает n на результат этого вызова.
Каждый вызов создает новый уровень стека до тех пор, пока не будет достигнуто условие выхода

Плюсы:
Читабельность: Код выглядит чисто и элегантно. Легко понять, что такое рекурсия и как она работает.
Меньше строк: Рекурсивный вариант требует меньше кода, что делает его компактным.

Минусы:
Проблема с производительностью: Рекурсивные вызовы могут вызвать переполнение стека (stack overflow) для больших значений n, 
так как каждый вызов функции занимает место в стеке вызовов.
Избыточные вычисления: Если n велико, функции вызываются много раз для одних и тех же значений, 
что увеличивает общее время выполнения

Итеративный вариант

Плюсы:
Эффективность: Итеративный подход не вызывает переполнение стека, так как использует цикл вместо рекурсии.
Простота оптимизации: Легче оптимизировать и предсказать время выполнения для больших значений n.
Обработка ошибок: Код обрабатывает отрицательные числа, возвращая сообщение об ошибке.

Минусы:
Меньшая читабельность: Для некоторых людей код может быть менее понятным из-за использования цикла.
Более длинный код: Требует больше строк, что может выглядеть менее элегантно

Выбор между рекурсивным и итеративным подходами зависит от контекста. 
Для небольших значений 𝑛 рекурсия может быть более удобной, 
в то время как для больших значений итеративный подход предпочтительнее из-за его устойчивости и эффективности
*/

function factorial(n) {
  if (n === 0 || n === 1) { // условие выхода для рекурсии или предотвращение лишних итераций для цикла
    return n
  } else {
    // return n * factorial(n-1)
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
  }
}

// output значение N!
console.log(factorial(number_1));


// ================================

// ================================ Разница зарплат

/* Task
В отделе работают 3 сотрудника, которые получают заработную плату в рублях. 
Требуется определить: на сколько зарплата самого высокооплачиваемого из них отличается от самого низкооплачиваемого.
Каждая заработная плата – это натуральное число, не превышающее 10 в степени 5
*/

// input
const nums_6 = [100, 500, 1000];

/* algorithm
Находим максимальное и минимальное значение в массиве и возвращаем разницу
*/
function salaryDifference(salariesArr) {
  const min = Math.min(...salariesArr);
  const max = Math.max(...salariesArr);
  return max - min
}

const salaryDifference_2 = salariesArr => Math.max(...salariesArr) - Math.min(...salariesArr);

/* explanation salaryDifference_3

Процесс обновления min и max
Инициализация:

min инициализируется значением Infinity, а max — значением -Infinity.
Первый проход по массиву:

При первом сравнении в цикле мы смотрим на первое значение массива. Допустим, оно равно 100:
javascript
Копировать код
if (100 < Infinity) { // Это истинно
  min = 100; // Теперь min становится 100
}
if (100 > -Infinity) { // Это тоже истинно
  max = 100; // Теперь max становится 100
}
Дальнейшие проходы:

При следующих проходах мы сравниваем значения зарплат с текущими min и max.
Если в массиве есть значение 500, когда мы дойдем до него:
javascript
Копировать код
if (500 < 100) { // Ложно, min не изменится
}
if (500 > 100) { // Истинно
  max = 500; // max обновляется
}
Почему min не станет 500
min не изменится на 500, потому что мы сначала установили его на 100 при первом сравнении. Для min мы ищем наименьшее значение, поэтому мы обновляем min только в том случае, если текущее значение меньше, чем текущее значение min.

Итог
min обновляется только если текущее значение меньше: Это позволяет сохранить наименьшее значение, найденное до этого момента.
На каждом шаге мы проверяем только текущее значение массива: Таким образом, даже если в массиве есть более высокие значения, они не могут обновить min, если они не меньше текущего min.
В результате, по завершении прохода по всему массиву min всегда будет содержать наименьшее значение среди всех зарплат, а max — наибольшее.
 */

function salaryDifference_3(salariesArr) {
  let min = Infinity;
  let max = -Infinity;

  for (let salary of salariesArr) {
    if (salary < min) {
      min = salary;
    }
    if (salary > max) {
      max = salary;
    }
  }

  return max - min;
}

// output
console.log(salaryDifference(nums_6));
console.log(salaryDifference_2(nums_6));
console.log(salaryDifference_3(nums_6));


// ================================

// ================================ Гадание

/* Task
Как и многие другие девочки, Маша любит разные гадания. 
Некоторое время назад Маша узнала новый способ гадать на числах – 
для какого-нибудь интересующего ее натурального числа n 
надо посчитать сумму всех чисел, на которые n делится без остатка. 
Маша не очень любит арифметику, и попросила вас написать программу, которая автоматизирует процесс гадания.

натуральное число n (n ≤ 1000), которое Маша была вынуждена сообщить
*/

// input
const number_2 = 10

/* algorithm
Инициализируем переменную sum, которая будет хранить сумму делителей.
Запускаем цикл от 1 до 𝑛 чтобы проверить каждое число 𝑖 
делится ли оно на 𝑛 без остатка.
Если число делится без остатка (n % i === 0), добавляем его к сумме.
По завершении цикла возвращаем значение суммы.
*/

function sumOfDivisors(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum;
}

// output выведите сумму всех натуральных делителей числа n.
console.log(sumOfDivisors(number_2));


// ================================

// ================================ 

// input

/* algorithm
*/

// output

// ================================

// ================================ 

// input

/* algorithm
*/

// output

// ================================

// ================================ 

// input

/* algorithm
*/

// output

// ================================