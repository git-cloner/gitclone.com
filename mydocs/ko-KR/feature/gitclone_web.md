---
이름: github 액세스 및 다운로드 속도를 높입니다
---

# Gitclone.com 개발자를 위한 서비스

​github에서 clone 코드 베이스는 시간이 많이 걸리는 일이며, 약간 더 큰 코드 베이스의 경우 클론 속도는 평균 20k ~ 40k/s에 불과하며 때로는 한 자리 수로 떨어질 수 있으며, clone은 시간 초과를 반복하지만, 온라인에는 hosts와 같은 속도 향상 방법을 소개하지만, 시도 후 거의 효과가 없다는 것을 알 수 있으며, 클론 속도를 높이기 위해 가능한 방법은 주로 캐싱 메커니즘입니다.

**git clone을 가속하는 것은 매우 간단합니다**

[https://gitclone.com](https://gitclone.com) 의 설립은 개발자의 클론 작업을 통해 github의 분산 캐시를 구축하고 프로그래머에게 서비스를 제공하는 github의 미러링 기능을 제공함으로써 이러한 문제를 해결하는 한 가지 방법입니다. 번거로운 포크 또는 가져오기 작업이 필요하지 않으며 clone 명령을 몇 단어로 변경하기만 하면 1.27M/s의 클론 속도에 도달할 수 있습니다(`gitclone.com/`가 증가함):

```shell
git clone https://gitclone.com/github.com/gogs/gogs.git
```

​`git clone https://github.com/gogs/gogs.git`의 20k/s 속도와 비교하면 두 가지 크기가 거의 차이가 나습니다.

**사용자가 많을수록 클론이 빨라집니다**

​gitclone.com github.com star > 10000의 코드 베이스를 캐시하고 star > 3000 코드 베이스의 캐시를 시작했으며, 캐시되지 않은 코드 베이스의 경우 개발자는 gitclone.com 통해 클론을 만들 때마다 영구 캐시를 설정하고 나중에 다른 개발자 클론이 캐시를 사용합니다. 개발자가 더 많이 사용할수록 캐시 적중률이 높아지고 클론이 빨라집니다.

**가속을 지원하는 방법에는 여러 가지가 있습니다**

​	URL 속도 향상을 수정하는 것 외에도 gitclone.com 캐시를 활용하는 방법에는 다음과 같습니다:

1、git 구성을 수정합니다

```shell
git config --global url."https://gitclone.com/".insteadOf https://
```

​그런 다음 `git clone https://github.com/gogs/gogs.git`와 같은 클론 명령을 정상적으로 실행합니다. 장점은 한 번 설정, 나중에 일반 clone, 단점은 전역 매개 변수, 모든 git 명령에 영향을 미치는, 예를 들어, `git push`는 매개 변수를 복원해야합니다.

2、cgit 클라이언트를 사용합니다

```shell
cgit clone https://github.com/gogs/gogs
```

​git 명령을 cgit, 한 글자 더, 가장 쉽게 사용할 수 있습니다.

**github에서 미러링을 지원하는 관리 코드 베이스입니다**

​gitclone.com 관리 코드 베이스 이미지를 사용하여 gitclone.com 개발자가 로그인하면 [https://gitclone.com/gogs/](https://gitclone.com/gogs/)을 사용하여 github에서 코드 베이스를 미러링할 수 있는 gogs 오픈 소스 코드 관리 시스템을 배포하여 github에서와 마찬가지로 온라인으로 코드를 탐색할 수 있다는 장점이 있습니다.하지만 더 빠릅니다.

**자주 사용하는 개발자 웹 사이트를 가속화합니다**

gitclone.com 또한 개발자에게 더 나은 서비스를 제공하기 위해 stackoverflow.com 및 go get의 속도 향상 방법을 수집했습니다.

**분산되고 광범위하게 관여하는 메커니즘입니다**

​github 코드 베이스 캐시에는 많은 양의 저장소 리소스가 필요하며 단일 컴퓨팅 노드에 의존하여 저장소 요구 사항을 충족하기가 어려우므로 gitclone.com 4개의 초기 유효성 검사 노드를 설정하는 분산 시스템을 구축하고 개발자가 자신의 컴퓨터를 캐시 리소스에 추가하는 메커니즘을 제공합니다. gitclone 오픈 소스 생태계가 점진적으로 개선됨에 따라 gitclone.com 다섯 번째 캐시 노드를 구축할 수 있기를 기대합니다!

**추가하십시오star**

​gitclone.com 개발자는 분산 캐시에 사용되는 [gitcache](https://github.com/git-cloner/gitcache) 및 [codechain](https://github.com/little51/codechain)을 오픈 소스로 사용했으며 두 오픈 소스 프로젝트에 star를 추가하기를 기대합니다.