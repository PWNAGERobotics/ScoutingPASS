Attribute VB_Name = "VBA_FUNCTIONS_2023"
Private Function countGrid(ByRef myCell As Range, ByVal countType As Integer) As Integer
    Dim myArrStr As String
    Dim myArr() As String
    
    Dim highNumArr() As String
    highNumArr = Split("1,2,3,4,5,6,7,8,9", ",")

    Dim medNumArr() As String
    medNumArr = Split("10,11,12,13,14,15,16,17,18", ",")
    
    Dim lowNumArr() As String
    lowNumArr = Split("19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36", ",")
    
    Dim coneNumArr() As String
    coneNumArr = Split("1,3,4,6,7,9,10,12,13,15,16,18,19,20,21,22,23,24,25,26,27", ",")
    
    Dim cubeNumArr() As String
    cubeNumArr = Split("2,5,8,11,14,17,28,29,30,31,32,33,34,35,36", ",")
    
    Dim totalGamePieces As Integer
    Dim highGamePieces As Integer
    Dim medGamePieces As Integer
    Dim lowGamePieces As Integer
    Dim coneCount As Integer
    Dim cubeCount As Integer
    
    totalGamePieces = 0
    highGamePieces = 0
    medGamePieces = 0
    lowGamePieces = 0
    coneCount = 0
    cubeCount = 0

    If (myCell.Cells.count > 1) Then
        MsgBox ("Pass in only 1 Cell")
        countGrid = -1
        Exit Function
    End If
        
    If Mid(myCell, 1, 1) = "[" And Mid(myCell, Len(myCell), 1) = "]" Then
        myArrStr = Mid(myCell, 2, Len(myCell) - 2)
    Else
        MsgBox ("Cell not formatted correctly")
        countGrid = -1
        Exit Function
    End If

    myArr = Split(myArrStr, ",")
    
    Dim item As Variant
    For Each item In myArr
        
        totalGamePieces = totalGamePieces + 1
        If Not IsError(Application.Match(item, highNumArr, 0)) Then
            highGamePieces = highGamePieces + 1
        End If
        If Not IsError(Application.Match(item, medNumArr, 0)) Then
            medGamePieces = medGamePieces + 1
        End If
        If Not IsError(Application.Match(item, lowNumArr, 0)) Then
            lowGamePieces = lowGamePieces + 1
        End If
        If Not IsError(Application.Match(item, coneNumArr, 0)) Then
            coneCount = coneCount + 1
        End If
        If Not IsError(Application.Match(item, cubeNumArr, 0)) Then
            cubeCount = cubeCount + 1
        End If
        
    Next item
    
    If countType = 1 Then
        ' Total game pieces
        countGrid = totalGamePieces
    ElseIf countType = 2 Then
        ' High game pieces
        countGrid = highGamePieces
    ElseIf countType = 3 Then
        ' Med game pieces
        countGrid = medGamePieces
    ElseIf countType = 4 Then
        ' Low game pieces
        countGrid = lowGamePieces
    ElseIf countType = 5 Then
        ' Cones
        countGrid = coneCount
    ElseIf countType = 6 Then
        ' Cubes
        countGrid = cubeCount
    Else
        ' Unsupported countType
        MsgBox ("Unrecognized countType")
        countGrid = -1
    End If

End Function

Private Function getTotalCount(ByRef myCell As Range) As Integer
    getTotalCount = countGrid(myCell, 1)
End Function

Private Function getHighCount(ByRef myCell As Range) As Integer
    getHighCount = countGrid(myCell, 2)
End Function

Private Function getMedCount(ByRef myCell As Range) As Integer
    getMedCount = countGrid(myCell, 3)
End Function

Private Function getLowCount(ByRef myCell As Range) As Integer
    getLowCount = countGrid(myCell, 4)
End Function

Private Function getConeCount(ByRef myCell As Range) As Integer
    getConeCount = countGrid(myCell, 5)
End Function

Private Function getCubeCount(ByRef myCell As Range) As Integer
    getCubeCount = countGrid(myCell, 6)
End Function

Private Function getAvgCycleTime(ByRef myCell As Range) As Double
    Dim myArrStr As String
    Dim myArr() As String
    
    If (myCell.Cells.count > 1) Then
        MsgBox ("Pass in only 1 Cell")
        getAvgCycleTime = -1
        Exit Function
    End If
        
    If Mid(myCell, 1, 1) = "[" And Mid(myCell, Len(myCell), 1) = "]" Then
        myArrStr = Mid(myCell, 2, Len(myCell) - 2)
    Else
        MsgBox ("Cell not formatted correctly")
        getAvgCycleTime = -1
        Exit Function
    End If

    myArr = Split(myArrStr, ",")
    
    Dim total As Double
    Dim count As Integer
    
    total = 0
    count = 0
    
    Dim item As Variant
    For Each item In myArr
        
        Dim numStr As String
        Dim num As Double

        num = WorksheetFunction.Sum(0 & item)
        total = total + num
        count = count + 1
    Next item
    
    If count = 0 Then
        getAvgCycleTime = 0
    Else
        getAvgCycleTime = total / count
    End If
    
End Function
