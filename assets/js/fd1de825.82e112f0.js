"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[484],{6425:(t,o,e)=>{e.r(o),e.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var n=e(7462),a=(e(7294),e(3905)),i=e(214);const u={title:"RadioButton.Group"},r=void 0,s={unversionedId:"components/RadioButton/RadioButtonGroup",id:"components/RadioButton/RadioButtonGroup",title:"RadioButton.Group",description:"Radio button group allows to control a group of radio buttons.",source:"@site/docs/components/RadioButton/RadioButtonGroup.mdx",sourceDirName:"components/RadioButton",slug:"/components/RadioButton/RadioButtonGroup",permalink:"/react-native-paper/docs/components/RadioButton/RadioButtonGroup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/RadioButton/RadioButtonGroup.mdx",tags:[],version:"current",frontMatter:{title:"RadioButton.Group"},sidebar:"components",previous:{title:"RadioButton.Android",permalink:"/react-native-paper/docs/components/RadioButton/RadioButtonAndroid"},next:{title:"RadioButton.IOS",permalink:"/react-native-paper/docs/components/RadioButton/RadioButtonIOS"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],c={toc:p};function l(t){let{components:o,...e}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,e,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Radio button group allows to control a group of radio buttons."),(0,a.kt)("div",{class:"screenshots"},(0,a.kt)("figure",null,(0,a.kt)("img",{class:"medium",src:"/react-native-paper/screenshots/radio-button-group-android.gif"}),(0,a.kt)("figcaption",null,"Android")),(0,a.kt)("figure",null,(0,a.kt)("img",{class:"medium",src:"/react-native-paper/screenshots/radio-button-group-ios.gif"}),(0,a.kt)("figcaption",null,"iOS"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View } from 'react-native';\nimport { RadioButton, Text } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [value, setValue] = React.useState('first');\n\n  return (\n    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>\n      <View>\n        <Text>First</Text>\n        <RadioButton value=\"first\" />\n      </View>\n      <View>\n        <Text>Second</Text>\n        <RadioButton value=\"second\" />\n      </View>\n    </RadioButton.Group>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(i.Z,{link:"RadioButton/RadioButtonGroup",mdxType:"PropTable"}))}l.isMDXComponent=!0}}]);