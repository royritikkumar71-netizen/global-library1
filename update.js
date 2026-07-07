const fs = require('fs');

try {
  let content = fs.readFileSync('src/components/TopHeader.tsx', 'utf8');
  content = content.replace(
    '<Phone className="w-4 h-4 text-[#00D4FF]" />\n            <span>+91 99059 35235</span>',
    '<Phone className="w-4 h-4 text-[#00D4FF]" />\n            <span>+91 99059 35235 / 95077 53671 / 83406 60791</span>'
  );
  fs.writeFileSync('src/components/TopHeader.tsx', content);

  let contact = fs.readFileSync('src/components/Contact.tsx', 'utf8');
  contact = contact.replace(
    '<div className="mt-4 flex gap-4">\n                  <a href="tel:+919905935235" className="text-xl font-[900] text-slate-900 dark:text-white hover:text-[#00D4FF] dark:hover:text-[#00D4FF] transition-colors">+91 99059 35235</a>\n                </div>',
    '<div className="mt-4 flex flex-col gap-2">\n                  <a href="tel:+919905935235" className="text-xl font-[900] text-slate-900 dark:text-white hover:text-[#00D4FF] dark:hover:text-[#00D4FF] transition-colors">+91 99059 35235</a>\n                  <a href="tel:+919507753671" className="text-xl font-[900] text-slate-900 dark:text-white hover:text-[#00D4FF] dark:hover:text-[#00D4FF] transition-colors">+91 95077 53671</a>\n                  <a href="tel:+918340660791" className="text-xl font-[900] text-slate-900 dark:text-white hover:text-[#00D4FF] dark:hover:text-[#00D4FF] transition-colors">+91 83406 60791</a>\n                </div>'
  );
  fs.writeFileSync('src/components/Contact.tsx', contact);
  console.log("Success");
} catch (e) {
  console.error(e);
}
