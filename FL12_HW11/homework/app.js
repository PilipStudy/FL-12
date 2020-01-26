const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

(function render (structure){
structure.forEach(function(item, i){
  console.log(item, i)
  
    
        let newElement = document.createElement('UL');
        rootNode.appendChild(newElement);

        let folderImage = document.createElement('i');
        newElement.appendChild(folderImage);
        folderImage.classList.add('material-icons');
        let titleTextForImage = document.createTextNode('folder');
        folderImage.appendChild(titleTextForImage);

        let elementTitleOfFolder = document.createElement('LI')
        newElement.appendChild(elementTitleOfFolder);
        let textForIconFolder = document.createTextNode(item.title);
        elementTitleOfFolder.appendChild(textForIconFolder);
        console.log(item.children[0].title)
  }
  )
  

})(structure)

  
  














