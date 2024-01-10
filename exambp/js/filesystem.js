var originalFilesystem = "<d name='/' path='/'>\
            <c>\
            <d name='bin' path='/bin/'>\
                <c>\
                </c>\
            </d>\
            <d name='boot' path='/boot/'>\
                <c>\
                </c>\
            </d>\
            <d name='dev' path='/dev/'>\
                <c>\
                </c>\
            </d>\
            <d name='docs' path='/docs/'>\
                <c>\
                    <d name='private' path='/docs/private/'>\
                        <c>\
                            <f name='secret.txt' path='/docs/private/'>\
                                <contents>PxNmGkl6M+jDP4AYAKZET18SEnWD5qw5LIP9174lONWslF144K9VHFIk1JA=</contents>\
                            </f>\
                        </c>\
                    </d>\
                    <f name='shoplist.txt' path='/docs/'>\
                        <contents>-Apples\n-Bananas\n-Cookies</contents>\
                    </f>\
                    <f name='ok.txt' path='/docs/'>\
                        <contents>I am ok.</contents>\
                    </f>\
                    <f name='moretodo.txt' path='/docs/'>\
                        <contents>A, B, C.</contents>\
                    </f>\
                </c>\
            </d>\
            <d name='etc' path='/etc/'>\
                <c>\
                </c>\
            </d>\
            <d name='home' path='/home/'>\
                <c>\
                    <d name='user' path='/home/user/'>\
                        <c>\
                           <d name='workdir' path='/home/user/workdir/'>\
                               <c>\
                                  <f name='boot-official.img' path='/home/user/workdir/'>\
                                      <contents>This is the official boot.img.</contents>\
                                  </f>\
                                  <f name='kernel-WSA-arm64-5.10.117.2-20220906.zip' path='/home/user/workdir/'>\
                                      <contents>https://github.com/tiann/KernelSU/releases</contents>\
                                  </f>\
                                  <f name='kernel-WSA-x86_64-5.10.117.2-20220906.zip' path='/home/user/workdir/'>\
                                      <contents>https://github.com/tiann/KernelSU/releases</contents>\
                                  </f>\
                                  <f name='ksu-10672-Image-android12-5.10.136_2022-11-boot-gz.img' path='/home/user/workdir/'>\
                                      <contents>https://github.com/tiann/KernelSU/releases</contents>\
                                  </f>\
                                  <f name='ksu-10672-Image-android12-5.10.136_2022-11-boot-lz4.img' path='/home/user/workdir/'>\
                                      <contents>https://github.com/tiann/KernelSU/releases</contents>\
                                  </f>\
                                  <f name='ksu-10672-Image-android12-5.10.136_2022-11-boot.img' path='/home/user/workdir/'>\
                                      <contents>https://github.com/tiann/KernelSU/releases</contents>\
                                  </f>\
                                  <f name='ksu-10672-Image-android13-5.10.107_2022-05-boot-gz.img' path='/home/user/workdir/'>\
                                      <contents>https://github.com/tiann/KernelSU/releases</contents>\
                                  </f>\
                                  <f name='ksu-10672-Image-android13-5.10.107_2022-05-boot-lz4.img' path='/home/user/workdir/'>\
                                      <contents>https://github.com/tiann/KernelSU/releases</contents>\
                                  </f>\
                                  <f name='ksu-10672-Image-android13-5.10.107_2022-05-boot.img' path='/home/user/workdir/'>\
                                      <contents>https://github.com/tiann/KernelSU/releases</contents>\
                                  </f>\
                                  <f name='ksu-10672-Image-android13-5.10.149_2022-05-boot-gz.img' path='/home/user/workdir/'>\
                                      <contents>https://github.com/tiann/KernelSU/releases</contents>\
                                  </f>\
                                  <f name='ksu-10672-Image-android13-5.10.149_2022-05-boot-lz4.img' path='/home/user/workdir/'>\
                                      <contents>https://github.com/tiann/KernelSU/releases</contents>\
                                  </f>\
                                  <f name='ksu-10672-Image-android13-5.10.149_2022-05-boot.img' path='/home/user/workdir/'>\
                                      <contents>https://github.com/tiann/KernelSU/releases</contents>\
                                  </f>\
                                  <f name='magiskboot' path='/home/user/workdir/'>\
                                      <contents>https://github.com/topjohnwu/Magisk/releases</contents>\
                                  </f>\
                               </c>\
                           </d>\
                           <d name='more' path='/home/user/more/'>\
                               <c>\
                                  <f name='moretodo.txt' path='/home/user/more/'>\
                                      <contents>Don't forget this other stuff.</contents>\
                                  </f>\
                               </c>\
                           </d>\
                           <f name='cool.txt' path='/home/user/'>\
                               <contents>There is a hidden command in this terminal called 'secret'.</contents>\
                           </f>\
                        </c>\
                    </d>\
                </c>\
            </d>\
            <d name='lib' path='/lib/'>\
                <c>\
                </c>\
            </d>\
            <d name='lib64' path='/lib64/'>\
                <c>\
                </c>\
            </d>\
            <d name='mnt' path='/mnt/'>\
                <c>\
                </c>\
            </d>\
            <d name='opt' path='/opt/'>\
                <c>\
                </c>\
            </d>\
            <d name='proc' path='/proc/'>\
                <c>\
                </c>\
            </d>\
            <d name='root' path='/root/'>\
                <c>\
                </c>\
            </d>\
            <d name='run' path='/run/'>\
                <c>\
                </c>\
            </d>\
            <d name='sbin' path='/sbin/'>\
                <c>\
                </c>\
            </d>\
            <d name='srv' path='/srv/'>\
                <c>\
                </c>\
            </d>\
            <d name='stuff' path='/stuff/'>\
                <c>\
                </c>\
            </d>\
            <d name='sys' path='/sys/'>\
                <c>\
                </c>\
            </d>\
            <d name='tmp' path='/tmp/'>\
                <c>\
                </c>\
            </d>\
            <d name='usr' path='/usr/'>\
                <c>\
                </c>\
            </d>\
            <d name='var' path='/var/'>\
                <c>\
                </c>\
            </d>\
            </c>\
        </d>";
/*
originalFilesystem = {
  "/" : {
    type: "d",
    name: "/",
    path: "/",
    children: {
      "animals" : {
        type: "d",
        name: "animals",
        path: "/animals",
        children: {
          "images" : {
            type: "d",
            name: "images",
            path: "/animals/cat",
            children: {
              "cat.txt" : {
                type: "f",
                name: "cat.txt",
                path: "/animals/cat/cat.txt",
                content: "Meow this is a cat."
              },
              "cat2.txt" : {
                type: "f",
                name: "cat2.txt",
                path: "/animals/cat/cat2.txt",
                content: "Meow this is ANOTHER a cat."
              }
            }
          }
        }
      },
      "hello.txt" : {
        type: "f",
        name: "hello.txt",
        path: "/hello.txt",
        content: "Hi there."
      }
    }
  }
};
*/