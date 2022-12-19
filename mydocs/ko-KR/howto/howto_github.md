---
이름: 가속 github
---

# github clone 가속

​개발자가 gitclone.com을 통해 clone github의 코드 라이브러리로 접속하면, gitclone.com은 코드 라이브러리를 mirror 캐시하며, 개발자 clone은 mirror 캐시에서 직접 데이터를 얻는다.mirror는 github.com에서 매일 밤 동기화됩니다.

**！！！먼저 git의 시간 초과 변수를 설정하여, 프로젝트가 클 때 서버측 mirror 시간이 너무 길어져 git 리포트 504 (시간 초과) 가 발생하는 것을 방지해야 한다.**

```shell
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999 
```

## 방법 1:url 수정

원본 url에 gitclone.com을 포함시키기:
```shell
git clone https://**gitclone.com/**github.com/gogs/gogs
```

업데이트가 필요한 경우 `git pull`을 사용할 수 있습니다(gitclone.com mirror 업데이트를 기다려야 함). 코드를 제출해야 하는 경우 gitclone.com 커밋을 지원하지 않으므로 .git/config의 `remote "origin"` 항목을 원래 github.com URL로 변경할 수 있습니다

## 방법 2:git 설정을 수정한다
```shell
​git config --global url."https://gitclone.com/".insteadOf https://
```

​그 후 clone이 된다

​이 명령은 **c:\users\사용자 이름\\.gitconfig**,~/.gitconfig 안에 있는 리눅스 프로필 url을 수정한다

## 방법 3:미러

​사용 [https://gitclone.com/gogs/](https://gitclone.com/gogs/) 코드 라이브러리 미러링 기능을 제공한다.


# 클라이언트
다음에 프로그램이 배포됨:[https://github.com/git-cloner/gitcache/releases](https://github.com/git-cloner/gitcache/releases)， 명령줄에서 인식할 수 있는 폴더에 다운로드한 cgit.exe를 넣습니다.명령은 다음과 같다:

```shell
cgit clone https://github.com/git-cloner/gitcache
cgit pull
```

원한다면.git/config에서'remote"origin"'항목을 원래의 github.com url로 변경하면 된다