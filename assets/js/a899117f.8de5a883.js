"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[607],{2449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));a(1839);const i={id:"library",title:"Smart Contracts - Library",sidebar_label:"Library",sidebar_position:4},r=void 0,s={unversionedId:"build/smart-contracts/reference/library",id:"build/smart-contracts/reference/library",title:"Smart Contracts - Library",description:"The Smart Contract library is composed of many modules with many functions in each.",source:"@site/docs/build/smart-contracts/reference/library.md",sourceDirName:"build/smart-contracts/reference",slug:"/build/smart-contracts/reference/library",permalink:"/build/smart-contracts/reference/library",draft:!1,tags:[],version:"current",lastUpdatedAt:1687181141,formattedLastUpdatedAt:"Jun 19, 2023",sidebarPosition:4,frontMatter:{id:"library",title:"Smart Contracts - Library",sidebar_label:"Library",sidebar_position:4},sidebar:"docs",previous:{title:"Actions",permalink:"/build/smart-contracts/reference/actions"},next:{title:"Fees",permalink:"/build/smart-contracts/fees"}},p={},o=[{value:"String",id:"string",level:2},{value:"size/1",id:"size1",level:3},{value:"in?/2",id:"in2",level:3},{value:"to_number/1",id:"to_number1",level:3},{value:"from_number/1",id:"from_number1",level:3},{value:"Map",id:"map",level:2},{value:"new/0",id:"new0",level:3},{value:"size/1",id:"size1-1",level:3},{value:"get/2",id:"get2",level:3},{value:"get/3",id:"get3",level:3},{value:"set/3",id:"set3",level:3},{value:"keys/1",id:"keys1",level:3},{value:"values/1",id:"values1",level:3},{value:"List",id:"list",level:2},{value:"at/2",id:"at2",level:3},{value:"size/1",id:"size1-2",level:3},{value:"in?/2",id:"in2-1",level:3},{value:"empty?/1",id:"empty1",level:3},{value:"concat/2",id:"concat2",level:3},{value:"append/2",id:"append2",level:3},{value:"prepend/2",id:"prepend2",level:3},{value:"join/2",id:"join2",level:3},{value:"Regex",id:"regex",level:2},{value:"extract/2",id:"extract2",level:3},{value:"match?/2",id:"match2",level:3},{value:"scan/2",id:"scan2",level:3},{value:"Json",id:"json",level:2},{value:"path_extract/2",id:"path_extract2",level:3},{value:"path_match?/2",id:"path_match2",level:3},{value:"to_string/1",id:"to_string1",level:3},{value:"parse/1",id:"parse1",level:3},{value:"is_valid?/1",id:"is_valid1",level:3},{value:"Time",id:"time",level:2},{value:"now/0",id:"now0",level:3},{value:"Chain",id:"chain",level:2},{value:"get_genesis_address/1",id:"get_genesis_address1",level:3},{value:"get_first_transaction_address/1",id:"get_first_transaction_address1",level:3},{value:"get_genesis_public_key/1",id:"get_genesis_public_key1",level:3},{value:"Crypto",id:"crypto",level:2},{value:"hash/1",id:"hash1",level:3},{value:"hash/2",id:"hash2",level:3},{value:"Token",id:"token",level:2},{value:"fetch_id_from_address/2",id:"fetch_id_from_address2",level:3},{value:"Contract",id:"contract",level:2},{value:"get_calls/0",id:"get_calls0",level:3},{value:"set_type/1",id:"set_type1",level:3},{value:"set_content/1",id:"set_content1",level:3},{value:"set_code/1",id:"set_code1",level:3},{value:"add_uco_transfer/1",id:"add_uco_transfer1",level:3},{value:"add_uco_transfers/1",id:"add_uco_transfers1",level:3},{value:"add_token_transfer/1",id:"add_token_transfer1",level:3},{value:"add_token_transfers/1",id:"add_token_transfers1",level:3},{value:"add_ownership/1",id:"add_ownership1",level:3},{value:"add_ownerships/1",id:"add_ownerships1",level:3},{value:"add_recipient/1",id:"add_recipient1",level:3},{value:"add_recipients/1",id:"add_recipients1",level:3}],d={toc:o};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Smart Contract library is composed of many modules with many functions in each.\n",(0,l.kt)("strong",{parentName:"p"},"Unless it is explicitely written, the functions will not mutate their arguments"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"# Don't\nsold_items = [1,2,3]\nList.concat(sold_items, [4,5,6]) \n\n# Do\nsold_items = [1,2,3]\nsold_items = List.concat(sold_items, [4,5,6]) \n")),(0,l.kt)("admonition",{title:"function/arity",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"In this page, the number after the slash indicates the arity of the function (number or arguments)."),(0,l.kt)("p",{parentName:"admonition"},"For example ",(0,l.kt)("inlineCode",{parentName:"p"},"size/1")," means the function ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," has 1 argument.")),(0,l.kt)("h2",{id:"string"},"String"),(0,l.kt)("h3",{id:"size1"},"size/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'String.size("hello")   # 5\nString.size("\u4f60\u597d")     # 2\n')),(0,l.kt)("p",null,"Parameters: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str")," the string ")),(0,l.kt)("p",null,"Returns the number of characters in ",(0,l.kt)("inlineCode",{parentName:"p"},"str"),". "),(0,l.kt)("h3",{id:"in2"},"in?/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'String.in?("bob,alice,julia", "alice")  # true\nString.in?("bob,alice,julia", "fred")   # false\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str1")," the haystack"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str2")," the needle")),(0,l.kt)("p",null,"Returns whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"needle")," is in the ",(0,l.kt)("inlineCode",{parentName:"p"},"haystack"),"."),(0,l.kt)("h3",{id:"to_number1"},"to_number/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'String.to_number("12")     # 12\nString.to_number("-12")    # -12\nString.to_number("12.1")   # 12.1\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str")," the string")),(0,l.kt)("p",null,"Returns the number which text representation is ",(0,l.kt)("inlineCode",{parentName:"p"},"str"),"."),(0,l.kt)("h3",{id:"from_number1"},"from_number/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'String.from_number(13)     # "13"\nString.from_number(13.2)   # "13.2"\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"number")," the number")),(0,l.kt)("p",null,"Returns the text representation of ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"map"},"Map"),(0,l.kt)("h3",{id:"new0"},"new/0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"Map.new() # empty map\n")),(0,l.kt)("p",null,"Returns an empty map. There is no shorthand notation."),(0,l.kt)("h3",{id:"size1-1"},"size/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Map.size(key1: "value", key2: "value2") # 2\n')),(0,l.kt)("p",null,"Parameters: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," the map")),(0,l.kt)("p",null,"Returns the number of keys in ",(0,l.kt)("inlineCode",{parentName:"p"},"map"),"."),(0,l.kt)("h3",{id:"get2"},"get/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Map.get([key1: "value", key2: "value2"], "key1") # "value"\nMap.get([key1: "value", key2: "value2"], "key3") # nil\n')),(0,l.kt)("p",null,"Parameters: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," the map"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," the key")),(0,l.kt)("p",null,"Returns the value at ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," is not in the ",(0,l.kt)("inlineCode",{parentName:"p"},"map"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"There is a shorthand notation ",(0,l.kt)("inlineCode",{parentName:"p"},"map.key")," when key is not a variable.")),(0,l.kt)("h3",{id:"get3"},"get/3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Map.get([key1: "value", key2: "value2"], "key1", "not in map") # "value"\nMap.get([key1: "value", key2: "value2"], "key3", "not in map") # "not in map"\n')),(0,l.kt)("p",null,"Parameters: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," the map"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," the key"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default")," the default value")),(0,l.kt)("p",null,"Returns the value at ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," is not in the ",(0,l.kt)("inlineCode",{parentName:"p"},"map"),"."),(0,l.kt)("h3",{id:"set3"},"set/3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Map.set([key1: "value", key2: "value2"], "key1", "valueX") # [key1: "valueX", key2: "value2"]\nMap.get([key1: "value", key2: "value2"], "key3", "value3") # [key1: "value", key2: "value2, key3: "value3"]\n')),(0,l.kt)("p",null,"Parameters: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," the map"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," the key"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," the value to set")),(0,l.kt)("p",null,"Returns a copy of ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," where the value at ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,l.kt)("h3",{id:"keys1"},"keys/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Map.keys(key1: "value", key2: "value2") # ["key1", "key2"]\n')),(0,l.kt)("p",null,"Parameters: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," the map")),(0,l.kt)("p",null,"Returns the list of keys in ",(0,l.kt)("inlineCode",{parentName:"p"},"map"),". "),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Use it with a ",(0,l.kt)("inlineCode",{parentName:"p"},"for loop")," to iterate on a map! "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"for key in Map.keys(map) do\n    ...\n    value = map[key]\n    ...\nend\n"))),(0,l.kt)("h3",{id:"values1"},"values/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Map.values(key1: "value", key2: "value2") # ["value", "value2"]\n')),(0,l.kt)("p",null,"Parameters: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," the map")),(0,l.kt)("p",null,"Returns the list of values in ",(0,l.kt)("inlineCode",{parentName:"p"},"map"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"list"},"List"),(0,l.kt)("p",null,"Lists are actually ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Linked_list"},"Linked List"),"."),(0,l.kt)("h3",{id:"at2"},"at/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'List.at(["a", "b", "c"], 0)     # "a"\nList.at(["a", "b", "c"], 1)     # "b"\nList.at(["a", "b", "c"], 2)     # "c"\nList.at([], 0)                  # nil\n')),(0,l.kt)("p",null,"Parameters: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index")," the index (zero-based)")),(0,l.kt)("p",null,"Returns the element at ",(0,l.kt)("inlineCode",{parentName:"p"},"index")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,l.kt)("h3",{id:"size1-2"},"size/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"List.size([])           # 0\nList.size([1,2,3,4])    # 4\n")),(0,l.kt)("p",null,"Parameters: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list")),(0,l.kt)("p",null,"Returns the number of keys in ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,l.kt)("h3",{id:"in2-1"},"in?/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'List.in?(["bob", "alice"], "alice") # true\nList.in?(["bob", "alice"], "fred")  # false\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the haystack"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element")," the needle")),(0,l.kt)("p",null,"Returns whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"needle")," is in the ",(0,l.kt)("inlineCode",{parentName:"p"},"haystack"),"."),(0,l.kt)("h3",{id:"empty1"},"empty?/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'List.empty?([])         # true\nList.empty?(["apple"])  # false\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list")),(0,l.kt)("p",null,"Returns whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," is empty or not."),(0,l.kt)("h3",{id:"concat2"},"concat/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"List.concat([], [])         # []\nList.concat([1,2], [3,4])   # [1,2,3,4]\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list1")," a list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list2")," another list")),(0,l.kt)("p",null,"Returns a new list where ",(0,l.kt)("inlineCode",{parentName:"p"},"list2")," is concatenated to ",(0,l.kt)("inlineCode",{parentName:"p"},"list1"),"."),(0,l.kt)("h3",{id:"append2"},"append/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"List.append([], 1)    # [1]\nList.append([1], 2)   # [1,2]\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element")," the element")),(0,l.kt)("p",null,"Returns a new list where ",(0,l.kt)("inlineCode",{parentName:"p"},"element")," is appended to the end of ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If order doesn't matter, we suggest to use ",(0,l.kt)("inlineCode",{parentName:"p"},"prepend/2")," instead (Complexity: O(1) instead of O(n)). ")),(0,l.kt)("h3",{id:"prepend2"},"prepend/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"List.prepend([], 1)    # [1]\nList.prepend([1], 0)   # [0,1]\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"element")," the element")),(0,l.kt)("p",null,"Returns a new list where ",(0,l.kt)("inlineCode",{parentName:"p"},"element")," is appended to the start of ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,l.kt)("h3",{id:"join2"},"join/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'List.join([], ", ")    # ""\nList.join(["Mike", "Robert", "Joe"], ", ")   # "Mike, Robert, Joe"\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")," the list of strings"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"separator")," the separator")),(0,l.kt)("p",null,"Returns a string where all ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),"'s elements have been joined with ",(0,l.kt)("inlineCode",{parentName:"p"},"separator")," separator."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"regex"},"Regex"),(0,l.kt)("h3",{id:"extract2"},"extract/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Regex.extract("123456abc", "[0-9]+")    # "123456"\nRegex.extract("voodoo", "[abc]")        # ""\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text")," the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pattern")," the element")),(0,l.kt)("p",null,"Returns the data from ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," extract via the regex ",(0,l.kt)("inlineCode",{parentName:"p"},"pattern"),". "),(0,l.kt)("h3",{id:"match2"},"match?/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Regex.match?("123456", "^[0-9]+$")      # true\nRegex.match?("123456abc", "^[0-9]+$")   # false\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text")," the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pattern")," the element")),(0,l.kt)("p",null,"Returns whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"pattern")," matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," or not."),(0,l.kt)("h3",{id:"scan2"},"scan/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Regex.scan("foo", "bar")                                    # []\nRegex.scan("toto,123\\ntutu,456\\n", "toto,([0-9]+)")         # ["123"]\nRegex.scan("toto,123\\ntutu,456\\n", "t.t.,([0-9]+)")         # ["123", "456"]\nRegex.scan("A0B1C2,123\\nD3E4F5,456\\n", "^(\\\\w+),(\\\\d+)$")   # [["A0B1C2", "123"], ["D3E4F5", "456"]]\n\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text")," the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pattern")," the element")),(0,l.kt)("p",null,"Returns the data from ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," extract via the regex ",(0,l.kt)("inlineCode",{parentName:"p"},"pattern"),". "),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This function requires the usage of capture groups (subexpressions).")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"json"},"Json"),(0,l.kt)("p",null,"Functions to manipulate JSON strings."),(0,l.kt)("p",null,"Useful resources:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://goessner.net/articles/JsonPath/"},"JSONPath documentation"))),(0,l.kt)("h3",{id:"path_extract2"},"path_extract/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Json.path_extract("{ \\"firstName\\": \\"John\\", \\"lastName\\": \\"Doe\\"}", "$.firstName") # "John"\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"json")," the json string"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," the path")),(0,l.kt)("p",null,"Returns the data at ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,l.kt)("h3",{id:"path_match2"},"path_match?/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Json.path_match?("{\\"1622541930\\":{\\"uco\\":{\\"eur\\":0.176922,\\"usd\\":0.21642}}}", "$.*.uco.usd") # true\nJson.path_match?("{\\"1622541930\\":{\\"uco\\":{\\"eur\\":0.176922,\\"usd\\":0.21642}}}", "$.*.uco.aud") # false\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"json")," the json string"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," the path")),(0,l.kt)("p",null,"Returns if there is a value at ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,l.kt)("h3",{id:"to_string1"},"to_string/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Json.to_string(1)           # "1"\nJson.to_string("str")       # "\\"str\\""\nJson.to_string([1,2,3])     # "[1,2,3]"\nJson.to_string(foo: "bar")  # "{\\"foo\\":\\"bar\\"}"\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"any")," anything")),(0,l.kt)("p",null,"Returns the Json representation of ",(0,l.kt)("inlineCode",{parentName:"p"},"any"),"."),(0,l.kt)("h3",{id:"parse1"},"parse/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Json.parse("1")                     # "1"\nJson.parse("\\"str\\"")               # "str"\nJson.parse("[1,2,3]")               # [1,2,3]\nJson.parse("{\\"foo\\":\\"bar\\"}")     # foo: "bar"\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"json")," the json string")),(0,l.kt)("p",null,"Returns the value represented by ",(0,l.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,l.kt)("h3",{id:"is_valid1"},"is_valid?/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Json.is_valid?("str")        # false\nJson.is_valid?("\\"str\\"")    # true\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"json")," the json string")),(0,l.kt)("p",null,"Returns whether the string is valid JSON or not."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"time"},"Time"),(0,l.kt)("h3",{id:"now0"},"now/0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"Time.now()  # 1677493444\n")),(0,l.kt)("p",null,"Returns an approximation of current time (seconds since epoch).\n",(0,l.kt)("strong",{parentName:"p"},"It will always return the same value within a contract.")),(0,l.kt)("admonition",{title:"Why an approximation?",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Because we need the smart contracts to be determinist.\nMany nodes will run them and all of them must produce the same transaction to validate a contract's execution.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"chain"},"Chain"),(0,l.kt)("h3",{id:"get_genesis_address1"},"get_genesis_address/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Chain.get_genesis_address("000012345...") # "000056789..."\nChain.get_genesis_address("000012345...") # "000012345..."\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"address")," the transaction address")),(0,l.kt)("p",null,"Returns the genesis address of the transaction chain that contains a transaction at ",(0,l.kt)("inlineCode",{parentName:"p"},"address"),". If there is no transaction at ",(0,l.kt)("inlineCode",{parentName:"p"},"address"),", it returns ",(0,l.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,l.kt)("h3",{id:"get_first_transaction_address1"},"get_first_transaction_address/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Chain.get_first_transaction_address("000012345...") # "000056789..."\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"address")," the transaction address")),(0,l.kt)("p",null,"Returns the address of the first transaction of the transaction chain that contains a transaction at ",(0,l.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"[IT CURRENTLY CRASH IF THERE IS NO TRANSACTION]")),(0,l.kt)("h3",{id:"get_genesis_public_key1"},"get_genesis_public_key/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Chain.get_genesis_public_key("00013B08D...") # "000108A5C..."\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"public_key")," the public key")),(0,l.kt)("p",null,"Returns the genesis public key of ",(0,l.kt)("inlineCode",{parentName:"p"},"public_key"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"crypto"},"Crypto"),(0,l.kt)("h3",{id:"hash1"},"hash/1"),(0,l.kt)("p",null,"Equivalent to ",(0,l.kt)("a",{parentName:"p",href:"#hash2"},"hash/2"),' with the second argument "sha256".'),(0,l.kt)("h3",{id:"hash2"},"hash/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Crypto.hash("my text", "sha256") # "7330D2B39CA35EA..."\nCrypto.hash("my text", "sha512") # "A3D7E45A0D9BE5F..."\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str")," the text to hash"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"algo"),' the hash algorithm ("sha256", "sha512", "sha3_256", "sha3_512", "blake2b")')),(0,l.kt)("p",null,"Returns the hash of ",(0,l.kt)("inlineCode",{parentName:"p"},"str")," by using ",(0,l.kt)("inlineCode",{parentName:"p"},"algo")," algorithm."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"token"},"Token"),(0,l.kt)("h3",{id:"fetch_id_from_address2"},"fetch_id_from_address/2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Token.fetch_id_from_address("000012345") # "3C21EF708BF11B4232..."\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"address")," the token address")),(0,l.kt)("p",null,"Returns the token's id of the token at ",(0,l.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"contract"},"Contract"),(0,l.kt)("p",null,"This module is special in many ways. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It is only available in the ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")," block."),(0,l.kt)("li",{parentName:"ul"},'Almost all functions mutates an internal state. We call this internal state the "next transaction".'),(0,l.kt)("li",{parentName:"ul"},'This "next transaction" is initiated with current contract (all values but transfers are copied)')),(0,l.kt)("h3",{id:"get_calls0"},"get_calls/0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"Contract.get_calls() # [tx1, tx2]\n")),(0,l.kt)("p",null,"Returns a list of transactions that have this contract's transaction address in the recipients. This is useful to do batching."),(0,l.kt)("h3",{id:"set_type1"},"set_type/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Contract.set_type("transfer")\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type"),' the transaction type ("contract", "transfer", "data", "hosting")')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Mutates")," the next transaction to be of type ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,l.kt)("h3",{id:"set_content1"},"set_content/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Contract.set_content("Hello Smart Contract")\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"content")," the transaction's content (we usually use this as the state of the smart contract)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Mutates")," the next transaction content to be ",(0,l.kt)("inlineCode",{parentName:"p"},"content"),". "),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"While ",(0,l.kt)("inlineCode",{parentName:"p"},"content")," is always a string when you read it, it is possible here to send an integer or a float for convenience.\nFor any other data structure, you should serialize it with the ",(0,l.kt)("a",{parentName:"p",href:"/build/smart-contracts/reference/library#json"},"Json module")," for example.")),(0,l.kt)("h3",{id:"set_code1"},"set_code/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Contract.set_code("@version 1\\ncondition inherit: []")\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"code")," the code")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Mutates")," the next transaction code to be ",(0,l.kt)("inlineCode",{parentName:"p"},"code"),". "),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},'This example "closes" the contract, by adding an ',(0,l.kt)("inlineCode",{parentName:"p"},"condition inherit")," that doesn't accept anything. It will be impossible to create a new transaction in this chain.")),(0,l.kt)("h3",{id:"add_uco_transfer1"},"add_uco_transfer/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Contract.add_uco_transfer(to: "000012345...", amount: 1)\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uco_transfer")," a map with two keys:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"to"),": the destination address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"amount"),": the number of UCO")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Mutates")," the next transaction to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"uco_transfer"),"."),(0,l.kt)("h3",{id:"add_uco_transfers1"},"add_uco_transfers/1"),(0,l.kt)("p",null,"Equivalent to call ",(0,l.kt)("a",{parentName:"p",href:"#add_uco_transfer1"},"add_uco_transfer/1")," for each element of the list"),(0,l.kt)("h3",{id:"add_token_transfer1"},"add_token_transfer/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Contract.add_token_transfer(\n    to: "000012345...",\n    amount: 1.2, \n    token_address: "000023456...")\nContract.add_token_transfer(\n    to: "000012345...",\n    amount: 1.2, \n    token_id: 4,\n    token_address: "000023456...")\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"token_transfer")," a map with three or four keys:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"to"),": the destination address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"amount"),": the number of UCO"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"token_address"),": the transaction address of the token"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[token_id]"),": an optional integer to specify which index in the list (used for the NFTs)")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Mutates")," the next transaction to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"token_transfer"),"."),(0,l.kt)("h3",{id:"add_token_transfers1"},"add_token_transfers/1"),(0,l.kt)("p",null,"Equivalent to call ",(0,l.kt)("a",{parentName:"p",href:"#add_token_transfer1"},"add_token_transfer/1")," for each element of the list"),(0,l.kt)("h3",{id:"add_ownership1"},"add_ownership/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Contract.add_ownership(\n    secret: "ENCODED_SECRET1", \n    authorized_public_keys: ["000108A5C..."], \n    secret_key: "___")\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ownership")," a map with three keys:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"secret"),": the encoded secret"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"authorized_public_keys"),": the list of public keys that may decode the secret"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"secret_key"),": the secret key used to encode the secret")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Mutates")," the next transaction to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"ownership"),"."),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"[PROBABLY REQUIRE AN EXAMPLE OR A BETTER EXPLANATION]")),(0,l.kt)("h3",{id:"add_ownerships1"},"add_ownerships/1"),(0,l.kt)("p",null,"Equivalent to call ",(0,l.kt)("a",{parentName:"p",href:"#add_ownership1"},"add_ownership/1")," for each element of the list"),(0,l.kt)("h3",{id:"add_recipient1"},"add_recipient/1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Contract.add_recipient("000012345...")\n')),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"address"),": a transaction address (one with a smart contract)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Mutates")," the next transaction to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"address")," in the recipients. "),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Recipients are used to trigger smart contracts")),(0,l.kt)("h3",{id:"add_recipients1"},"add_recipients/1"),(0,l.kt)("p",null,"Equivalent to call ",(0,l.kt)("a",{parentName:"p",href:"#add_recipient1"},"add_recipients/1")," for each element of the list"))}k.isMDXComponent=!0}}]);