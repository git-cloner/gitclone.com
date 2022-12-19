---
이름:소개
---

# Gitclone.com

​gitclone.com은 github.com 캐시 가속 웹사이트로, 자주 방문하는 github의 코드 라이브러리를 캐시를 통해 github의 gitclone 동작을 가속시킨다.가 당신을 ` git 클론 https://gitclone.com/github.com/yourrepository `의 방식으로 클론 코드 쿠시 gitclone.com mirror 하나 새로 생 긴 이후 다시는 개발자 클론 때github의 gitclone 속도는 일반적으로 20k/s 이지만 gitclone.com의 gitclone 속도는 1.2m/s까지 올라간다.

​gitclone은 다음과 같이 작동합니다.개발자가 처음으로 gitclone.com에서 clone 프로젝트를 대리할 때, 프로젝트는 나중에 개발자가 프로젝트를 clone 할 때, github.com에서 clone이 아닌 gitclone.com에 있는 로컬 미러 이미지를 사용하게 된다.gitclone.com은 매일 밤 github.com과 동기화된다.증가하는 디스크 리소스에 대한 미러 요구를 해결하기 위해 gitclone.com은 블록 체인 클러스터로 확장되며, 미러 작업은 매번 클러스터의 모든 서버에 방송되며, 각 서버들은 후속 클론 요청에 응답하기 위해 미러를 생성하고 등록할 수 있다.gitclone.com은 stackoverflow.com과 go get과 같은 빠른 접근에 대해"개발자를 위한 서비스"라고 설명하였다.