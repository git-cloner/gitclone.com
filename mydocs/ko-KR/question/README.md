---
이름: 자주 묻는 질문
---

# FAQ

##### Q: 첫 번째 클론은 느립니다

A：첫 번째 클론은 캐시가 설정되지 않았기 때문에 clone 요청이 github.com 클론에서 직접 설정된 속도와 동등한 github.com 리디렉션됩니다. 항목이 크고 시간이 너무 오래 걸리는 경우 클론 프로세스를 중단하고 로컬로 clone이 있는 폴더를 삭제할 수 있습니다. mirror는 depth=1로 설정되어 짧은 시간 내에 서비스를 제공 할 수 있으므로 나중에 다시 시도하십시오.

##### Q:코드 베이스가 크면 clone 프로시저가 중단되고 clone이 잘못 보고됩니다

A：클라이언트가 중단 된 후, gitclone.com 중단되지 않고 mirror를 계속, 그래서 다시 clone, mirror 프로세스 중에, 클라이언트에 데이터를 반환 할 수 없기 때문에, 프롬프트 : 'remote: git cache is updating... ..., please wait', 나중에 다시 시도하십시오.

##### Q:git push 때，보고fatal: Authentication failed for ...

A：gitclone.com은 push를 지원하지 않으므로 c:\users\사용자 이름\\.gitconfig (~/.gitconfig 파일에 있는 리눅스)의 url 구성을 복원하십시오

##### Q:git clone--depth=1 또한 속도를 높일 수 있는데 gitclone.com은 어떤 상황에 적합한가

A: gitclone.com은 영구 mirror (goget), 팀 클론 (team clone), 같은 프로젝트를 한 번 클론하여 프로젝트가 여러 번 클론되는 장면을 위해 만들어지며 영구적으로 속도를 낸다.

##### Q：첫 번째 클론은 정상, 두 번째 clone 보고서 fatal: protocol error: expected sha/ref, got 'shallow... ...

A:git 클라이언트의 버전이 2.0 이하이므로, 이전에 미러링되지 않았다면 첫 clone은 github.com으로 리디렉팅이 되지만 (git2.x로 설정), 다시 git1.x에서 미러링된 clone에서 프로토콜 오류를 알려서 git 클라이언트를 업데이트하면 된다.

##### Q：개인 라이브러리는 gitclone.com을 통해 clone 할 수 없다

A:개인 라이브러리의 clone은 인증이 필요하지만 gitclone.com은 사용자의 데이터 보안을 위해이 기능을 제공하지 않습니다.이전에 캐시를 설정했던 공공 라이브러리가 개인 라이브러리로 변경되면, gitclone.com은 매일 동시에 캐시에서 삭제된다.