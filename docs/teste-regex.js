// ^(?:\w.*)\s(?:\d{4,5})\s(?:\w.*)

// ^(\w.*)\s(\d{4,5})\s(\w.*)
// ^(.*)\s(\d{4,5})\s(\w.*)

// ^(\w.*)\s(\d{4,5})\s(\w.*)
// $1@@$2@@$3

// ^(.*)(\s\d{4,5})\s

// ^\b(.*)\s(\d{4,5})\s(\b.*?)\s(([A-Z][a-z]|[A-z]\s).*)
// ^\b(.*)\s(\d{4,5})\s\b(.*)\s\b(([A-Z][a-z]|[A-z]\s).*)
// ^\b(.*)\s(\d{4,5})\s\b(.*?)\s(([A-Z][a-z]|[A-z]\s).*)

// ([A-Z][A-Z]|[A-Z].*\))\s(([A-Z][a-z]|[A-z]\s|[A-Z][áàâãéèêíïóôõöúçñ]).*)$

// (.*[A-Z]|.*[ÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ])\s(([A-Z][a-z]|[A-Z]\s|[A-Z][áàâãéèêíïóôõöúçñ]).*)+$

// ^\b(.*)\s(\d{4,5})\s\b(.+?[A-Z][a-záàâãéèêíïóôõöúçñ]|[A-Z]\s)

// ^\b(.*)\s(\d{4,5})\s(.*[A-ZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][A-ZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]|[A-ZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]\s)

// ^\b(.*)\s(\d{4,5})\s(.*[A-ZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][A-ZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]|[A-ZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]\s)\s(.*)

var myString = `Christina Aguilera 20461 AIN´T NO OTHER MAN
Donna Summer 20468 ON THE RADIO
Green Day 20466 HOLIDAY
Justin Bieber 20462 COMPANY
Nicolette Larson 20467 LOTTA LOVE
Ozzy Osbourne 20463 CRAZY TRAIN
Radiohead 20465 HIGH AND DRY
Ric Ocasek 20464 EMOTION IN MOTION
Taylor Swift 20470 WILDEST DREAMS
U2 20469 SWEETEST THING
`;

var myRegexp = /^(?:\w.*)\s(?:\d{4,5})\s(?:\w.*)$/g;
const matches = myString.matchAll(myRegexp)
for (const match of matches) {
  console.log(match);
  console.log(match.index)
}