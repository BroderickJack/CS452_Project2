function getVertices(){

vertices = [//Top Face
                    vec4( 0.5, 0.0, -0.3, 1.0), //p0
                    vec4( 0.5, 0.0, 0.3, 1.0 ), //p1
                    vec4( -0.5, 0.0, 0.3, 1.0 ), //p2
                    vec4( -0.5, 0.0, -0.3, 1.0 ), //p3
                    
                    //RIGHT FACE
                    vec4( 0.5, -0.1, -0.3, 1.0 ), //p4
                    vec4( 0.5, 0.0, -0.3, 1.0), //p0 -> p5
                    vec4( 0.5, 0.0, 0.3, 1.0 ), //p1 -> p6
                    vec4 (0.5, -0.1, 0.3, 1.0 ), //p7
                    
                    //FRONT FACE
                    vec4( 0.5, 0.0, 0.3, 1.0 ), //p1 -> p8
                    vec4( -0.5, 0.0, 0.3, 1.0 ), //p9
                    vec4( -0.5, -0.1, 0.3, 1.0), //p10
                    vec4 (0.5, -0.1, 0.3, 1.0 ), //p7 -> p11
                    
                    //LEFT FACE
                    vec4( -0.5, -0.1, -0.3, 1.0 ), //p12
                    vec4( -0.5, 0.0, -0.3, 1.0), //p13
                    vec4( -0.5, 0.0, 0.3, 1.0 ), //p14
                    vec4 (-0.5, -0.1, 0.3, 1.0 ), //p15
                    
                    //BACK FACE
                    vec4( 0.5, 0.0, -0.3, 1.0 ), //p16
                    vec4( -0.5, 0.0, -0.3, 1.0 ),//p17
                    vec4( -0.5, -0.1, -0.3, 1.0), //p18
                    vec4 (0.5, -0.1, -0.3, 1.0 ), //p19
                    
                    //BOTTOM FACE
                    vec4( 0.5, -0.1, -0.3, 1.0), //p20
                    vec4( 0.5, -0.1, 0.3, 1.0 ), //p21
                    vec4( -0.5, -0.1, 0.3, 1.0 ), //p22
                    vec4( -0.5, -0.1, -0.3, 1.0 ), //p23
    
    
                    //LEG ONE
                    /*
                    //TOP
                    vec4( 0.5, -0.1, 0.3, 1.0 ), //0
                    vec4( 0.5, -0.1, 0.2, 1.0 ), //1
                    vec4( 0.4, -0.1, 0.2, 1.0 ), //2
                    vec4( 0.4, -0.1, 0.3, 1.0 ), //3
                     */
    
                    //Bottom Face
                    vec4( 0.5, -0.6, 0.3, 1.0 ), //24
                    vec4( 0.5, -0.6, 0.2, 1.0 ), //25
                    vec4( 0.4, -0.6, 0.2, 1.0 ), //26
                    vec4( 0.4, -0.6, 0.3, 1.0 ), //27
                    
                    //Right Face
                    vec4( 0.5, -0.1, 0.3, 1.0 ), //28
                    vec4( 0.5, -0.1, 0.2, 1.0 ), //29
                    vec4( 0.5, -0.6, 0.3, 1.0 ), //30
                    vec4( 0.5, -0.6, 0.2, 1.0 ), //31
                    
                    //Left Face
                    vec4( 0.4, -0.1, 0.2, 1.0 ), //32
                    vec4( 0.4, -0.1, 0.3, 1.0 ), //33
                    vec4( 0.4, -0.6, 0.2, 1.0 ), //34
                    vec4( 0.4, -0.6, 0.3, 1.0 ), //35
                    
                    //Front
                    vec4( 0.4, -0.1, 0.3, 1.0 ), //36
                    vec4( 0.5, -0.1, 0.3, 1.0 ), //37
                    vec4( 0.4, -0.6, 0.3, 1.0 ), //38
                    vec4( 0.5, -0.6, 0.3, 1.0 ), //39
                    
                    //back
                    vec4( 0.5, -0.1, 0.2, 1.0 ), //40
                    vec4( 0.4, -0.1, 0.2, 1.0 ), //41
                    vec4( 0.4, -0.6, 0.2, 1.0 ), //42
                    vec4( 0.5, -0.6, 0.2, 1.0 ), //43
    
                    //LEG TWO
    
                    //Bottom Face
                    vec4( 0.5, -0.6, -0.3, 1.0 ), //44
                    vec4( 0.5, -0.6, -0.2, 1.0 ), //45
                    vec4( 0.4, -0.6, -0.2, 1.0 ), //46
                    vec4( 0.4, -0.6, -0.3, 1.0 ), //47
    
                    //Right Face
                    vec4( 0.5, -0.1, -0.3, 1.0 ), //48
                    vec4( 0.5, -0.1, -0.2, 1.0 ), //49
                    vec4( 0.5, -0.6, -0.3, 1.0 ), //50
                    vec4( 0.5, -0.6, -0.2, 1.0 ), //51
    
                    //Left Face
                    vec4( 0.4, -0.1, -0.2, 1.0 ), //52
                    vec4( 0.4, -0.1, -0.3, 1.0 ), //53
                    vec4( 0.4, -0.6, -0.2, 1.0 ), //54
                    vec4( 0.4, -0.6, -0.3, 1.0 ), //55
    
                    //Front
                    vec4( 0.4, -0.1, -0.3, 1.0 ), //56
                    vec4( 0.5, -0.1, -0.3, 1.0 ), //57
                    vec4( 0.4, -0.6, -0.3, 1.0 ), //58
                    vec4( 0.5, -0.6, -0.3, 1.0 ), //59
    
                    //back
                    vec4( 0.5, -0.1, -0.2, 1.0 ), //60
                    vec4( 0.4, -0.1, -0.2, 1.0 ), //61
                    vec4( 0.4, -0.6, -0.2, 1.0 ), //62
                    vec4( 0.5, -0.6, -0.2, 1.0 ), //63
    
                    //LEG THREE
    
                    //Bottom Face
                    vec4( -0.5, -0.6, 0.3, 1.0 ), //64
                    vec4( -0.5, -0.6, 0.2, 1.0 ), //65
                    vec4( -0.4, -0.6, 0.2, 1.0 ), //66
                    vec4( -0.4, -0.6, 0.3, 1.0 ), //67
    
                    //Right Face
                    vec4( -0.5, -0.1, 0.3, 1.0 ), //68
                    vec4( -0.5, -0.1, 0.2, 1.0 ), //69
                    vec4( -0.5, -0.6, 0.3, 1.0 ), //70
                    vec4( -0.5, -0.6, 0.2, 1.0 ), //71
    
                    //Left Face
                    vec4( -0.4, -0.1, 0.2, 1.0 ), //72
                    vec4( -0.4, -0.1, 0.3, 1.0 ), //73
                    vec4( -0.4, -0.6, 0.2, 1.0 ), //74
                    vec4( -0.4, -0.6, 0.3, 1.0 ), //75
    
                    //Front
                    vec4( -0.4, -0.1, 0.3, 1.0 ), //76
                    vec4( -0.5, -0.1, 0.3, 1.0 ), //77
                    vec4( -0.4, -0.6, 0.3, 1.0 ), //78
                    vec4( -0.5, -0.6, 0.3, 1.0 ), //79
    
                    //back
                    vec4( -0.5, -0.1, 0.2, 1.0 ), //80
                    vec4( -0.4, -0.1, 0.2, 1.0 ), //81
                    vec4( -0.4, -0.6, 0.2, 1.0 ), //82
                    vec4( -0.5, -0.6, 0.2, 1.0 ), //83
    
                    //LEG FOUR
    
                    //Bottom Face
                    vec4( -0.5, -0.6, -0.3, 1.0 ), //84
                    vec4( -0.5, -0.6, -0.2, 1.0 ), //85
                    vec4( -0.4, -0.6, -0.2, 1.0 ), //86
                    vec4( -0.4, -0.6, -0.3, 1.0 ), //87
    
                    //Right Face
                    vec4( -0.5, -0.1, -0.3, 1.0 ), //88
                    vec4( -0.5, -0.1, -0.2, 1.0 ), //89
                    vec4( -0.5, -0.6, -0.3, 1.0 ), //90
                    vec4( -0.5, -0.6, -0.2, 1.0 ), //91
    
                    //Left Face
                    vec4( -0.4, -0.1, -0.2, 1.0 ), //92
                    vec4( -0.4, -0.1, -0.3, 1.0 ), //93
                    vec4( -0.4, -0.6, -0.2, 1.0 ), //94
                    vec4( -0.4, -0.6, -0.3, 1.0 ), //95

                    //Front
                    vec4( -0.4, -0.1, -0.3, 1.0 ), //96
                    vec4( -0.5, -0.1, -0.3, 1.0 ), //97
                    vec4( -0.4, -0.6, -0.3, 1.0 ), //98
                    vec4( -0.5, -0.6, -0.3, 1.0 ), //99
    
                    //back
                    vec4( -0.5, -0.1, -0.2, 1.0 ), //100
                    vec4( -0.4, -0.1, -0.2, 1.0 ), //101
                    vec4( -0.4, -0.6, -0.2, 1.0 ), //102
                    vec4( -0.5, -0.6, -0.2, 1.0 )]; //103
                    
                return vertices;
        }
        
function getFaces(){

indexList = [//Top Face
                     0,2,1,
                     0,3,2,
                     
                     //Right Face
                     5,7,4,
                     5,6,7,
                     
                     //Front Face
                     8,9,10,
                     11,8,10,
                     
                     //LEFT FACE
                     15, 14, 13,
                     13, 12, 15,
                     
                     //BACK FACE
                     18, 16, 19,
                     17, 16, 18,
                     
                     //BOTTOM FACE
                     22, 20, 21,
                     23, 20, 22,
                     
                     //LEG ONE
                     //bottom Face
                     25,27,24,
                     25,26,27,
                     
                     //Front Face
                     30,29,28,
                     31,29,30,
                     
                     //LEFT FACE
                     32, 34, 35,
                     33, 32, 35,
                     
                     //BACK FACE
                     37, 36, 38,
                     39, 37, 38,
                     
                     //back FACE
                     42, 41, 40,
                     40, 43, 42,
                     
                     //LEG TWO
                     //bottom Face
                     45,47,44,
                     45,46,47,
                     
                     //Front Face
                     50,49,48,
                     51,49,50,
                     
                     //LEFT FACE
                     52, 54, 55,
                     53, 52, 55,
                     
                     //BACK FACE
                     57, 56, 58,
                     59, 57, 58,
                     
                     //back FACE
                     62, 61, 60,
                     60, 63, 62,
                     
                     //LEG THREE
                     //bottom Face
                     65,67,64,
                     65,66,67,
                     
                     //Front Face
                     70,69,68,
                     71,69,70,
                     
                     //LEFT FACE
                     72, 74, 75,
                     73, 72, 75,
                     
                     //BACK FACE
                     77, 76, 78,
                     79, 77, 78,
                     
                     //back FACE
                     82, 81, 80,
                     80, 83, 82,
                     
                     //LEG FOUR
                     //bottom Face
                     85,87,84,
                     85,86,87,
                     
                     //Front Face
                     90,89,88,
                     91,89,90,
                     
                     //LEFT FACE
                     92, 94, 95,
                     93, 92, 95,
                     
                     //BACK FACE
                     97, 96, 98,
                     99, 97, 98,
                     
                     //back FACE
                     102, 101, 100,
                     100, 103, 102];

    return indexList;


}


function getTexture(){
        
    textureCoordinates = [//Top Face
                          0.0, 1.0,
                          0.5, 1.0,
                          0.5, 0.0,
                          0.0, 0.0,
                          
                          //RIGHT FACE
                          0.25, 1.0,
                          0.0, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          
                          //FRONT FACE
                          0.0, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          0.25, 1.0,
                          
                          //LEFT FACE
                          0.25, 1.0,
                          0.0, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          
                          //BACK FACE
                          0.0, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          0.25, 1.0,
                          
                          //BOTTOM FACE
                          0.0, 1.0,
                          0.5, 1.0,
                          0.5, 0.0,
                          0.0, 0.0,
                          
                          //LEG ONE
                          
                          //BOTTOM FACE
                          0.5, .5,
                          0.5, 1.0,
                          0.0, 1.0,
                          0.0, .50,
                          
                          //RIGHT FACE
                          0.0, 1.0,
                          0.25, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          
                          //LEFT FACE
                          0.0, 1.0,
                          0.25, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          
                          //FRONT FACE
                          0.5, 1.0,
                          0.6, 1.0,
                          0.5, 0.0,
                          0.6, 0.0,
                          
                          //BACK FACE
                          0.5, 1.0,
                          0.6, 1.0,
                          0.6, 0.0,
                          0.5, 0.0,
                          
                          //LEG TWO
                          //BOTTOM FACE
                          0.5, .5,
                          0.5, 1.0,
                          0.0, 1.0,
                          0.0, .50,
                          
                          //RIGHT FACE
                          0.0, 1.0,
                          0.25, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          
                          //LEFT FACE
                          0.0, 1.0,
                          0.25, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          
                          //FRONT FACE
                          0.8, 1.0,
                          0.9, 1.0,
                          0.8, 0.0,
                          0.9, 0.0,
                          
                          //BACK FACE
                          0.5, 1.0,
                          0.6, 1.0,
                          0.6, 0.0,
                          0.5, 0.0,
                          
                          //LEG THREE
                          
                          //BOTTOM FACE
                          0.5, .5,
                          0.5, 1.0,
                          0.0, 1.0,
                          0.0, .50,
                          
                          //RIGHT FACE
                          0.0, 1.0,
                          0.25, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          
                          //LEFT FACE
                          0.0, 1.0,
                          0.25, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          
                          //FRONT FACE
                          0.8, 1.0,
                          0.9, 1.0,
                          0.8, 0.0,
                          0.9, 0.0,
                          
                          //BACK FACE
                          0.5, 1.0,
                          0.6, 1.0,
                          0.6, 0.0,
                          0.5, 0.0,
                          
                          //LEG FOUR
                          //BOTTOM FACE
                          0.5, .5,
                          0.5, 1.0,
                          0.0, 1.0,
                          0.0, .50,
                          
                          //RIGHT FACE
                          0.0, 1.0,
                          0.25, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          
                          //LEFT FACE
                          0.0, 1.0,
                          0.25, 1.0,
                          0.0, 0.0,
                          0.25, 0.0,
                          
                          //FRONT FACE
                          0.9, 1.0,
                          1.0, 1.0,
                          0.9, 0.0,
                          1.0, 0.0,
                          
                          //BACK FACE
                          0.5, 1.0,
                          0.6, 1.0,
                          0.6, 0.0,
                          0.5, 0.0
                          
                          ];
            
            return textureCoordinates;
                    
}
