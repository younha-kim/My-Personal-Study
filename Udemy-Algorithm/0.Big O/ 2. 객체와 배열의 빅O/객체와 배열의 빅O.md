# 객체의 빅O
- 객체는 시작과 끝이 정해지지 않고 단지 key를 사용해서 추가 하는 것.
- 객체는 순서가 필요하지 않을 때 좋다.
- 빠른 접근, 입력과 제거를 원할 때 좋다.

>모든 연산, 입력, 접근, 업데이트, 제거 이 모두 상수시간을 가진다. 탐색은 희귀하지만 N에 따라서 점점 커지기 때문에 O(N)이 된다. 
<br>  

- Object.keys 메소드는 object의 키를 모두 탐색하여 새로운 배열에 할당한다. 
- 그렇기 때문에 만약 엘리먼트가 100개 이거나, 속성이 100개라면 처리해야할 연산이 100개가 있다는 뜻이다. 그렇기 때문에 O(n)이 된다.
- Object.values, Object.entries 도 똑같이 O(N)을 가지게 된다, 

### hasOwnProperty
- 하지만 hasOwnProperty 메소는 조금 다르게 O(1)이다. 
-  이 메소드는 true또는 false의 값만 반환한다. 키의 값을 원하면 상수 시간으로 정보에 접근할 수 있다. 


# 배열의 빅O
- 정렬이 필요할 때 사용한다.(정렬을 사용하지 않을 거면 객체를 사용하는 것이 좋기 때문.)
- 연산 특히 입력과 제거를 할 때 성능을 저하 시킬 수 있다.


- 배열의 접근은 객체의 경우와 마찬가지로 상수시간을 가진다. O(1)
``` javascript 
    let names = ['Michael', 'Melisa', 'Andrea'];
    // 'Micheal'  'Melisa' 'Andrea'
    //     0         1         2
```
이 때 배열은 Micheal 에 접근하든, Melisa에 접근하든, 모두 같은 상수시간을 가진다. 

이해를 쉽게 돕기 위해서, 만약 10000게의 데이터에서 9000번째 인덱스를 요청했을 때 자바스크립트는 모든 엘리먼트들을 하나씩 지나가면서 9000번까지 숫자를 세고 있다가 원하는 값에 도착했을 때 내주는 것이 아니다. 인덱스는 엘리먼트마다 바로 갈 수 있는 지름길이 있다고 생각하는게 좋다. 인덱스를 만나면 값에 바로 접근할 수 있기 때문에, 
배열이 얼마나 긴지는 중요하지 않고, 마지막값이든 중간값이든, 처음에 있든 상수 시간이다. 


## 배열의 입력 
배열은 새로운 값을 오른쪽 맨끝에 추가하는 것과, 배열의 왼쪽 맨 앞에 값을 추가하는 빅오는 다르다. 
전자는 기존에 존재하는 인덱스의 끝에서 하나를 더해주기 때문에 상수시간을 가지는 방면, 후자는 배열안의 모든 인덱스를 바꿔주어야 하기 때문에, O(n)의 시간을 가진다. 

<p>그러한 이유로, 비어있는 배열을 제거하고, push 와 pop이 하는 작업이 shift와 unshift 작업보다 빠른다.</p>

- 제거하는 것 또한 인덱스에 혼선을 주기 때문에, 배열의 앞에 추가하는것과 제거하는 것은 최대한 지양해야한다. 

- push, pop => O(1) 
- shift, concat, slice, splice, forEach, map, filterm, reduce   => O(N) 
- sort    => O(N*logN)






















