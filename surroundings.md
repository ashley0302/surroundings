# 네트워크 프로그래밍 프로젝트

3512 손채린



### 개발개요

#### 프로젝트명

surroundings

#### 설명

차량용 인포테인먼트 앱을 프로토타입 형식으로 웹으로 구현. 

차량에 탑승한 사용자는 주행을 하면서 근처에서 무슨일이 일어나고 있는지, 주변에 있는 맛집 정보들을 알 수 있음

같은 도로에 있는 사람들, 같은 장소에 있는 사람들과 함께하는 장소 중심 sns

### 서비스 내용

#### 주요기능

##### 1. 사용자 실시간 위치 파악

navigator**.**geolocation**.**watchPosition 을 이용해 사용자의 실시간 위치를 받아오고 socketio을 이용해 웹상의 map에 실시간으로 띄워줌.

##### 2.  특정 장소에 대한 정보, 특정 장소에서 자신에 발생한일 등 장소에 대한 이야기 공유

사용자가 이야기를 남기고 싶은 장소에 대해 제목, 내용, 태그를 활용해 글을 남길 수 있음.

##### 3 . 카테고리별로 다른 사람이 공유한 장소에 대한 이야기들을 보여줌 

특정 태그를 선택하면 주변에서 태그와 관련된 글이 작성된 장소들을 마커로 보여줌.

마커를 클릭하면 컨텐츠의 내용을 볼 수 있음

### UI설계

#### 메인페이지

<img src="C:\Users\spide\AppData\Roaming\Typora\typora-user-images\1596674301976.png" alt="1596674301976" style="zoom: 50%;" />



##### 출발버튼 

사용자가 주행을 시작할때 출발 버튼을 클릭하면 사용자의 **실시간 위치**를 계속적으로 보여줌

##### 카테고리

각 태그를 클릭하면 태그와 관련된 글이 작성된 장소 **마커들이 표시**됨

각 마커를 클릭하면 작성한 글이 나타남

##### 지금 위치 등록하기

장소와 관련된 글을 작성할 수 있는 페이지로 연결

<img src="C:\Users\spide\AppData\Roaming\Typora\typora-user-images\1596757528237.png" alt="1596757528237" style="zoom:50%;" /> <img src="C:\Users\spide\AppData\Roaming\Typora\typora-user-images\1596757555317.png" alt="1596757555317" style="zoom:50%;" />

####  글 작성 페이지

<img src="C:\Users\spide\AppData\Roaming\Typora\typora-user-images\1596674768852.png" alt="1596674768852" style="zoom:50%;" />

##### 마커로 장소 설정

사용자의 현재 위치를 기준으로 마커를 생성해줌. 사용자가 **드래그**를 통해 위치를 바꿀 수 있음

##### 글 작성

글의 제목 및 내용을 간단하게 작성, 내용의 byte 수는 제한 됨. 

##### 태그 설정

어떤 카테고리의 글인지 태그를 통해 분류



### 구현과정

#### 소켓 구현 부분

socket.io 를 이용하여 사용자의 위치를 실시간으로 map에 표시하는 것을 구현함. 



<img src="C:\Users\spide\AppData\Roaming\Typora\typora-user-images\1596757151254.png" alt="1596757151254" style="zoom:67%;" />

<img src="C:\Users\spide\AppData\Roaming\Typora\typora-user-images\1596675112024.png" alt="1596675112024" style="zoom: 80%;" /> 

<img src="C:\Users\spide\AppData\Roaming\Typora\typora-user-images\1596776758066.png" alt="1596776758066" style="zoom: 67%;" />







