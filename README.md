# CAUTION!
Jangan push ke origin/main, branch main hanya dipake untuk codingan yang udah jadi dan siap di launch ke VM AWS, cara buat branch baru ada dibawah.

git checkout (nama_branch) <- ini cara untuk pindah branch

# Creating New Branch

What is [branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)?

1. git branch (nama)
2. git checkout (nama)
3. git push -u origin (nama)

# Push to main from other branch

1. git checkout main
2. git checkout (nama_branch) -- (file_path)
3. git status <-- memeriksa status dari file yang sudah di add
4. git commit -m '(Message)'
5. git push origin main

# Documentations
1. [Importing css to html using node.js](https://stackoverflow.com/questions/50441000/include-css-and-js-files-in-node-js)