require.config({
    baseUrl: 'js',
    paths:{
        jquery: 'asserts/jquery-min'
    }
});

require(["area3d"],function(area3d){
    console.dir(area3d);
});
